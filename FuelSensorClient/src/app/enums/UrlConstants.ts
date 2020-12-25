import { environment } from 'src/environments/environment.prod';

export const UrlConstants = {

    // BaseUrl
    baseUrl: environment.baseUrl,
   


    // security
  
    login:"auth/login",
    logout:"auth/logout",
    refresh:"auth/refresh",
    //dashboard
    getDashboard:"dashboard/load",

    //user
    insertUser:"user/save",
    updateUser:"user/update",
    searchAllUser:"user/search/all",
    userUtils:"user/utils",
    getOnlineUser:"user/search/online",
    getOfflineUser:"user/search/offline",
    getActiveUser:"user/search/active",
    getBlockedUser:"user/search/blocked",
    getUserByUserID:"user/search/id",

    //Client Data
    getClientData: "client/getClientData",
    insertClientData: "client/insert",
    editClientData: "client/edit", 

    //Vehicle Data
    getVehicleData: "vehicle/getvehiclelist",
    insertVehicleData: "vehicle/insert",
    editVehicleData: "vehicle/edit",

    //Parameter Settings 
    insertParameterSettings: "parametersettings/insert",
    editParameterSettings: "parametersettings/edit",
    getParameterSettingsData: "parametersettings/getparametersettingslist",

    //Filling Data
    // getFillingData: "draining/report",
    getFillingData: "fuelsensor/report",
    getFillingDataDB: "fuelsensor/dbreport",
    uploadData:"fuelsensor/upload",
    //Recruitment Session
    insertRecruitSession:"recruitSession/save",
    editRecruitSession:"recruitSession/update",
    getAllRecruitSession:"recruitSession/search/all",

    //Training Session
    insertTrainingSession:"trainingSession/save",
    editTrainingSession:"trainingSession/update",
    getAllTrainingSession:"trainingSession/search/all",

    //Training Session
    insertSessionMapper:"sessionMapper/save",
    editSessionMapper:"sessionMapper/update",
    getAllSessionMapper:"sessionMapper/search/all",

    //Request Entry
    insertRequestEntry:"requestEntry/save",
    editRequestEntry:"requestEntry/update",
    getAllRequestEntry:"requestEntry/search/all",

    //Exam Center
    insertExamCenter:"examcenter/save",
    editExamCenter:"examcenter/update",
    getAllExamCenter:"examcenter/search/all",
    getExamCenterUtils:"examcenter/utils",
    

    //Exam Center
    insertTeamAssignment:"teamAssignment/save",
    editTeamAssignment:"teamAssignment/update",
    getAllTeamAssignment:"teamAssignment/search/all",
    getTeamAssignmentUtils:"teamAssignment/utils",
    deleteTeamAssignment:"teamAssignment/delete",
    //Training Center
    insertTrainingCenter:"trainingcenter/save",
    editTrainingCenter:"trainingcenter/update",
    getAllTrainingCenter:"trainingcenter/search/all",
    getTraininigCenterUtils:"trainingcenter/utils",
    
    //Training Center
    insertTestCenter:"testcenter/save",
    editTestCenter:"testcenter/update",
    getAllTestCenter:"testcenter/search/all",
    getTestCenterUtils:"testcenter/utils",

    //Exam Test
    insertExamTest:"examtest/save",
    editExamTest:"examtest/update",
    getAllExamTest:"examtest/search/all",

    //BRU
    insertBRU:"bru/save",
    editBRU:"bru/update",
    getAllBRU:"bru/search/all",

    //Test Result
    insertTestResult:"testResult/save",
    editTestResult:"testResult/update",
    getAllTestResult:"testResult/search/all",

        //Exam Test
        insertTrade:"trade/save",
        editTrade:"trade/update",
        getAllTrade:"trade/search/all",
    
        //ARM
        insertARM:"arm/save",
        editARM:"arm/update",
        getAllARM:"arm/search/all",
    
        //Test Result
        insertDress:"dress/save",
        editDress:"dress/update",
        getAllDress:"dress/search/all",

    //Marks Convertion
    insertMarksConvertion:"marksconvertion/save",
    editMarksConvertion:"marksconvertion/update",
    getAllMarksConvertion:"marksconvertion/search/all",
    getAllMarksUtility:"marksconvertion/utils",

    //Vacancy
    insertVacancy:"vacancy/save",
    editVacancy:"vacancy/update",
    getAllVacancy:"vacancy/search/all",
    getVacancyUtils:"vacancy/utils",
    getVacancyByID:"vacancy/id",
    getFilteredVacancy:"vacancy/filter",
    //Holiday
    insertHoliday:"holiday/save",
    editHoliday:"holiday/update",
    getAllHoliday:"holiday/search/all",
    getHolidayUtils:"holiday/utils",
    getHolidayByID:"holiday/id",

    //observation
    insertObservation:"observation/save",
    editObservation:"observation/update",
    getAllObservation:"observation/search/all",
    getObservationUtils:"observation/utils",
    getObservationByID:"observation/id",
    getExamResultByFilter:"observation/filter",
    getObservationByStatus:"observation/status",
    //Candidate
    insertCandidate:"candidate/save",
    editCandidate:"candidate/update",
    getAllCandidate:"candidate/search/all",
    getCandidateUtils:"candidate/utils",
    getCandidateByFilter:"candidate/filter",
    getCandidateByID:"candidate/id",
    getCandidateProfile:"candidate/profile",
    getSelectedCandidate:"candidate/selected",
    getSelectedCandidateByDate:"candidate/selected/date",
    getWeeklyRahadari:"candidate/weekly/rahadari",
    getReviewedList:"review/filter",
    getAllReviewedList:"review/search/all",
    getHbsTestDateWiseReport:"candidate/hbstestDateReport",
    getCandidateByExamRoll:"candidate/rollNo",
    getHbsTestReportByDate:"candidate/hbstestReportByDate",
    getCandidateHistoryBySession:"candidate/history/session",
    //Schedule
    insertSchedule:"schedule/save",
    editSchedule:"schedule/update",
    getAllSchedule:"schedule/search/all",
    getScheduleUtils:"schedule/utils",
    getScheduleByFilter:"schedule/filter",
    getScheduleByID:"schedule/id",
    getScheduleDetailsByID:"schedule/details/id",
    getScheduleDetailsByDate:"schedule/details/date",
    getPresentCandidatesByDate:"schedule/presentcandidate/date",
    transferSchedules:"schedule/transfer",
    insertAttendance:"schedule/attendance",
    getScheduleReport:"schedule/report",
    getScheduleDetailsReport:"schedule/details/report"
};
