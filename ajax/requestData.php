<?php

namespace LORIS\biobank;

/**
 * Biobank Data Requester.
 *
 * Handles biobank fetch and get requests received from a front-end ajax call.
 *
 * PHP Version 5
 *
 * @category Loris
 * @package  Biobank
 * @author   Henri Rabalais <hrabalais.mcin@gmail.com>
 * @license  Loris license
 * @link     https://github.com/aces/Loris-Trunk
 */

/**
 * Data Request Controller
 */
if (isset($_GET['action'])) {
    $db     = \Database::singleton();
    $action = $_GET['action'];
    
    switch($action) {
    case 'getFormOptions':
        echo json_encode(getFormOptions($db), JSON_NUMERIC_CHECK);
        break;
    case 'getSpecimenData':
        echo json_encode(getSpecimenData($db), JSON_NUMERIC_CHECK);
        break;
    case 'getSpecimenDataFromBarcode':
        //TODO: change the name of above to match
        echo json_encode(getSpecimensFromBarcodeList($db), JSON_NUMERIC_CHECK);
        break;
    case 'getContainerData':
        echo json_encode(getContainerData($db), JSON_NUMERIC_CHECK);
        break;
    case 'getContainerFilterData':
        echo json_encode(getContainerFilterData($db), JSON_NUMERIC_CHECK);
        break;
    }
}

/**
 * Retrieves all options for populating forms and displays.
 *
 * @return array
 */
function getFormOptions($db)
{
    $specimenDAO  = new SpecimenDAO($db);
    $containerDAO = new ContainerDAO($db);

    // This should eventually be replaced by candidate DAO
    $query      = 'SELECT CandID as id, PSCID as pscid FROM candidate';
    $candidates = $db->pselectWithIndexKey($query, array(), 'id');

    // This should eventually be replaced by session DAO
    $query = 'SELECT ID as id, Visit_label as label FROM Visit_Windows';
    $sessions = $db->pselectWithIndexKey($query, array(), 'id');

    $centers = \Utility::getSiteList();

    //TODO: This should eventually be replaced by session dao
    $query = 'SELECT c.CandID as candidateId,
                     s.ID sessionId,
                     s.Visit_label as label,
                     s.CenterID as centerId
             FROM candidate c
             LEFT JOIN session s
               USING(CandID)';
    $result = $db->pselect($query, array());
    $candidateSessions = array();
    $sessionCenters = array();
    foreach ($result as $row) {
        foreach($row as $column=>$value) {
            $candidateSessions[$row['candidateId']][$row['sessionId']]['label'] = $row['label'];
            $sessionCenters[$row['sessionId']]['centerId'] = $row['centerId'];
        }
    }

    $specimenTypes              = $specimenDAO->getSpecimenTypes();
    $specimenTypeUnits          = $specimenDAO->getSpecimenTypeUnits();
    $specimenTypeAttributes     = $specimenDAO->getSpecimenTypeAttributes();
    $specimenUnits              = $specimenDAO->getSpecimenUnits();
    $specimenProtocols          = $specimenDAO->getSpecimenProtocols();
    $specimenProtocolAttributes = $specimenDAO->getSpecimenProtocolAttributes();
    $specimenMethods            = $specimenDAO->getSpecimenMethods();
    $specimenMethodAttributes   = $specimenDAO->getSpecimenMethodAttributes();
    $attributeDatatypes         = $specimenDAO->getAttributeDatatypes();
    $attributeOptions           = $specimenDAO->getAttributeOptions();
    $containerTypes             = $containerDAO->getContainerTypes(); 
    $containerTypesPrimary      = $containerDAO->getContainerTypes(['Primary'=>1]);
    $containerTypesNonPrimary   = $containerDAO->getContainerTypes(['Primary'=>0]);
    $containerDimensions        = $containerDAO->getContainerDimensions();
    $containerCoordinates       = $containerDAO->getContainerCoordinates();
    $containerStati             = $containerDAO->getContainerStati();
    $containersNonPrimary       = $containerDAO->selectContainers(['Primary'=>0]);

    $formOptions = array(
        'candidates'                 => $candidates,
        'sessions'                   => $sessions,
        'centers'                    => $centers,
        'candidateSessions'          => $candidateSessions,
        'sessionCenters'             => $sessionCenters,
        'specimenTypes'              => $specimenTypes,
        'specimenTypeUnits'          => $specimenTypeUnits,
        'specimenProtocols'          => $specimenProtocols,
        'specimenProtocolAttributes' => $specimenProtocolAttributes,
        'specimenMethods'            => $specimenMethods,
        'specimenMethodAttributes'    => $specimenMethodAttributes,
        'containerTypes'             => $containerTypes, 
        'containerTypesPrimary'      => $containerTypesPrimary,
        'containerTypesNonPrimary'   => $containerTypesNonPrimary,
        'containerDimensions'        => $containerDimensions,
        'containerCoordinates'       => $containerCoordinates,
        'containerStati'             => $containerStati,
        'containersNonPrimary'       => $containersNonPrimary,
        'specimenUnits'              => $specimenUnits,
        'specimenTypeAttributes'     => $specimenTypeAttributes,
        'attributeDatatypes'         => $attributeDatatypes,
        'attributeOptions'           => $attributeOptions,
    );

    return $formOptions;
}

 /**
  * @return array 
  * @throws DatabaseException 
  */ 
function getSpecimenData($db) 
{ 
    $specimenDAO  = new SpecimenDAO($db); 
    $containerDAO = new ContainerDAO($db); 
 
    $specimenData = array(); 
    $barcode      = $_GET['barcode']; 
    $specimen     = $specimenDAO->getSpecimenFromBarcode($barcode); 
    $container    = $containerDAO->getContainerFromSpecimen($specimen); 
    $candidate    = $specimenDAO->getCandidateInfo($specimen); 
    $session      = $specimenDAO->getSessionInfo($specimen); 

    //TODO: This will need to be refactored when multiple parents are added
    $parentSpecimen = $specimenDAO->getParentSpecimen($specimen); 
    if ($parentSpecimen) { 
        $parentSpecimenContainer = $containerDAO->getContainerFromSpecimen($parentSpecimen);
        $specimenData['parentSpecimenContainer'] = $parentSpecimenContainer;
        $specimenData['parentSpecimen'] = $parentSpecimen; 
    } 
 
    $parentContainer = $containerDAO->getParentContainer($container); 
    if ($parentContainer) { 
        $specimenData['parentContainer'] = $parentContainer;
    } 
 
    $specimenData += [ 
        'specimen'  => $specimen, 
        'container' => $container, 
        'candidate' => $candidate,
        'session'   => $session
    ]; 
 
    return $specimenData; 
}

 /**
  * Returns Container Data
  *
  * @return array
  * @throws DatabaseException
  */
function getContainerData($db)
{
    $containerDAO = new ContainerDAO($db);

    $barcode          = $_GET['barcode'];
    $container        = $containerDAO->getContainerFromBarcode($barcode);
    $childContainers  = $containerDAO->getChildContainers($container);
    $parentContainers = $containerDAO->getAllParentContainers($container);

    $containerData = array(
        'container'       => $container,
        'childContainers' => $childContainers,
        'parentContainers'=> $parentContainers
    );

    return $containerData;
}

/**
 * Handles barcode request for specimen data 
 */
function getSpecimensFromBarcodeList($db)
{
  $specimenDAO = new SpecimenDAO($db);

  $barcodeList = $_GET['barcodeList'] ?? null;


  //TODO: this function may be used for shipping, but this validation will not be
  //applicable. Find a way to do this.
  if (count($barcodeList) < 2) {
      showError('Pooling requires at least 2 barcodes');
  }

  $typeId;
  $candidateId;
  $sessionId;
  $specimenId;
  $specimens = array();
  foreach ($barcodeList as $barcode) {
    $specimen = $specimenDAO->getSpecimenFromBarcode($barcode);

    $nextTypeId = $specimen->getTypeId();
    if (!isset($typeId)) {
      $typeId = $nextTypeId;
    } else if ($typeId !== $nextTypeId) {
      showError(400, "Specimen $barcode is not of the same type as the previous specimen(s).");
    }

    $nextCandidateId = $specimen->getCandidateId();
    if (!isset($candidateId)) {
      $candidateId = $nextCandidateId;
    } else if ($candidateId !== $nextCandidateId) {
     showError(400, "Specimen $barcode does not share the same PSCID as the previous specimen(s).");
    }

    $nextSessionId = $specimen->getSessionId();
    if (!isset($sessionId)) {
      $sessionId = $nextSessionId;
    } else if ($sessionId !== $nextSessionId) {
      showError(400, "Specimen $barcode does not share the same Session as the previous specimen(s).");
    }

    $nextSpecimenId = $specimen->getId();
    if (!isset($specimenId)) {
      $specimenId = $nextSpecimenId;
    } else if ($specimenId === $nextSpecimenId) {
      showError(400, 'Specimens cannot be selected twice for pooling');
    }

    $specimens[] = $specimen;
  }

  //TODO: Eventually, collecting the specimenIds may not be necessary since there will
  // be a searchable dropdown for barcodes. 
  $data['specimens'] = $specimens;

  return $data;
}


//TODO: This function really should be hear. This should be in the container class.
function getContainerFilterData($db) 
{
    /**
     * Filter Option Queries and Mapping
     */
    $containerDAO = new ContainerDAO($db);
    
    //Container Types
    $containerTypes = array();
    $containerTypeList = $containerDAO->getContainerTypes(['Primary'=>0]);
    foreach ($containerTypeList as $containerType) {
        $containerTypes[$containerType['label']] = $containerType['label'];
    }

    //Container Statuses
    $containerStati = array();
    $containerStatusList = $containerDAO->getContainerStati();
    foreach ($containerStatusList as $containerStatus) {
        $containerStati[$containerStatus['status']] = $containerStatus['status'];
    }
    
    //Sites
    $siteList = \Utility::getSiteList(false);
    foreach ($siteList as $key => $site) {
        unset($siteList[$key]);
        $siteList[$site] = $site;
    }

    /**
     * Form Construction
     */
    $form = array(
        'barcode'       => array('label'   => 'Barcode', 
                                 'name'    => 'barcode', 
                                 'class'   => 'form-control input-sm', 
                                 'type'    => 'text'),
        'type'          => array('label'   => 'Type', 
                                 'name'    => 'type', 
                                 'class'   => 'form-control input-sm', 
                                 'type'    => 'select',
                                 'options' => $containerTypes),
        'status'        => array('label'   => 'Status', 
                                 'name'    => 'status', 
                                 'class'   => 'form-control input-sm', 
                                 'type'    => 'select',
                                 'options' => $containerStati),
        'location'      => array('label'   => 'Location', 
                                 'name'    => 'location', 
                                 'class'   => 'form-control input-sm', 
                                 'type'    => 'select',
                                 'options' => $siteList),
        'parentBarcode' => array('label'   => 'Parent Barcode', 
                                 'name'    => 'parentBarcode', 
                                 'class'   => 'form-control input-sm', 
                                 'type'    => 'text')
    );
  
    /**
     * Table Headers
     */
    $headers = array(
        'Barcode',
        'Type', 
        'Status',
        'Location',
        'Parent Barcode',
        'Date Created',
        'Comments'
    );

    /**
     * Table Values
     */
    $query = "SELECT bc1.Barcode,
                     bct.Label as Type,
                     bcs.Label as Status,
                     psc.Name as Location,
                     bc2.Barcode as `Parent Barcode`,
                     bc1.DateTimeCreate as `Date Created`,
                     bc1.Comments
              FROM biobank_container bc1
              LEFT JOIN biobank_container_type bct 
                USING (ContainerTypeID)
              LEFT JOIN biobank_container_status bcs
                USING (ContainerStatusID)
              LEFT JOIN psc ON bc1.CurrentCenterID=psc.CenterID
              LEFT JOIN biobank_container_parent bcp
                USING (ContainerID)
              LEFT JOIN biobank_container bc2
                ON bcp.ParentContainerID=bc2.ContainerID
              WHERE bct.Primary=:n";

    $result = $db->pselect($query, array('n' => 0));
    
    /**
     * Data Mapping
     */
    $data = array();
    foreach($headers as $key=>$header) {
      foreach($result as $rowIndex=>$row) {
        foreach($row as $column=>$value) {
            if ($column == $header) { 
              $data[$rowIndex][$key] = $value;
            }
        }
      }
    }

    /**
     * Return All Values
     */
    $containerFilterData = array(
        'form'    => $form,
        'Headers' => $headers,
        'Data'    => $data
    );

    return $containerFilterData;
}

