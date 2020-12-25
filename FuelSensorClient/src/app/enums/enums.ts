
       export enum Action
       {
           Insert=1,
           Update,
           View,
           Delete
       }
       export enum Module
       {
           Admin = 1,
           Client
       }
      export enum StatusCode
       {
           Success=1,
           Failed,
           Exception
       }
      export enum LoginStatus
       {
           Loggedin=1,
           Logout
       }
       export enum UserStatus
       {
           Active = 1,
           InActive,
           Blocked,
           delete
       }
       export enum Status
       {
           Active = 1,
           InActive,
           delete
       }
       export enum Gender
       {
           Male=1,
           Female,
           Both
       }
       export enum MessageType
       {

       }
       export enum ExamCategory
       {
           Height=1,
           SSC,
           Physical
       }
       export enum AccessRight
       {
           HQAdmin=1,
           BRUAdmin,
           Clerk
       }
       export enum EducationLevels
       {
           SSC=1,
           HSC
       }
       export enum TestCategory
       {
           Physical=1,
           Medical
       }
       export enum CandidateStatus
       {
            Saved=1,
            Scheduled,
            Attended,
            ResultEntry,
            Selected,
            Rejected,
            TempRejected
       }
       export enum FileType
       {
          NewApplicants=1,
          PreviousAppearence,
          PreviousBarred,
          PreviousMedicalObs,
          PreviousMiscObs
       }
