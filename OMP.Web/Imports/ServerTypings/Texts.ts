namespace OMP.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Note {
                export const EntityId: string;
                export const EntityType: string;
                export const InsertDate: string;
                export const InsertUserDisplayName: string;
                export const InsertUserId: string;
                export const NoteId: string;
                export const Text: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Offers {

            namespace Accounts {
                export const AccountId: string;
                export const Address: string;
                export const CityCountryId: string;
                export const CityId: string;
                export const CityName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Name: string;
                export const NoteList: string;
                export const Phone: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace AccountsLang {
                export const AccountAddress: string;
                export const AccountCityId: string;
                export const AccountId: string;
                export const AccountName: string;
                export const AccountPhone: string;
                export const Address: string;
                export const Id: string;
                export const LanguageId: string;
                export const Name: string;
            }

            namespace Categories {
                export const CategoryId: string;
                export const FontColor: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Name: string;
                export const NoteList: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace CategoriesLang {
                export const CategoryFontColor: string;
                export const CategoryId: string;
                export const CategoryName: string;
                export const Id: string;
                export const LanguageId: string;
                export const Name: string;
            }

            namespace Cities {
                export const CityId: string;
                export const CountryId: string;
                export const CountryName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Name: string;
                export const NoteList: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace CitiesLang {
                export const CityCountryId: string;
                export const CityId: string;
                export const CityName: string;
                export const Id: string;
                export const LanguageId: string;
                export const Name: string;
            }

            namespace Companies {
                export const Address: string;
                export const CityCountryId: string;
                export const CityId: string;
                export const CityName: string;
                export const CompanyId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Name: string;
                export const NoteList: string;
                export const Phone: string;
                export const PrimaryAccountAddress: string;
                export const PrimaryAccountCityId: string;
                export const PrimaryAccountId: string;
                export const PrimaryAccountName: string;
                export const PrimaryAccountPhone: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace CompaniesLang {
                export const Address: string;
                export const CompanyAddress: string;
                export const CompanyCityId: string;
                export const CompanyId: string;
                export const CompanyName: string;
                export const CompanyPhone: string;
                export const CompanyPrimaryAccountId: string;
                export const Id: string;
                export const LanguageId: string;
                export const Name: string;
            }

            namespace Countries {
                export const CountryId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Name: string;
                export const NoteList: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace CountriesLang {
                export const CountryId: string;
                export const Id: string;
                export const LanguageId: string;
                export const Name: string;
            }

            namespace OfferCategories {
                export const CategoryFontColor: string;
                export const CategoryFontColorReport: string;
                export const CategoryId: string;
                export const CategoryName: string;
                export const CategoryNameReport: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const NoteList: string;
                export const OfferAdditionalInfo: string;
                export const OfferCategoryId: string;
                export const OfferCompanyId: string;
                export const OfferDiscount: string;
                export const OfferId: string;
                export const OfferMaximumDaysDevelopmentTime: string;
                export const OfferMinimumDaysDevelopmentTime: string;
                export const OfferName: string;
                export const OfferOfferStatusId: string;
                export const OfferStartDate: string;
                export const Price: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace OfferCategoriesLang {
                export const CategoryNameReport: string;
                export const Id: string;
                export const LanguageId: string;
                export const OfferCategoryCategoryFontColorReport: string;
                export const OfferCategoryCategoryId: string;
                export const OfferCategoryCategoryNameReport: string;
                export const OfferCategoryId: string;
                export const OfferCategoryOfferId: string;
                export const OfferCategoryPrice: string;
            }

            namespace OfferCategoryTasks {
                export const Description: string;
                export const DevelopmentTimeHours: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Name: string;
                export const NoteList: string;
                export const OfferCategoryCategoryFontColorReport: string;
                export const OfferCategoryCategoryId: string;
                export const OfferCategoryCategoryNameReport: string;
                export const OfferCategoryId: string;
                export const OfferCategoryOfferId: string;
                export const OfferCategoryPrice: string;
                export const OfferCategoryTaskId: string;
                export const OfferName: string;
                export const ParentOfferCategoryTaskDescription: string;
                export const ParentOfferCategoryTaskDevelopmentTimeHours: string;
                export const ParentOfferCategoryTaskId: string;
                export const ParentOfferCategoryTaskName: string;
                export const ParentOfferCategoryTaskOfferCategoryId: string;
                export const ParentOfferCategoryTaskParentOfferCategoryTaskId: string;
                export const ParentOfferCategoryTaskTaskStatusId: string;
                export const TaskStatusBackgroundColor: string;
                export const TaskStatusBorderColor: string;
                export const TaskStatusId: string;
                export const TaskStatusName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace OfferCategoryTasksLang {
                export const Description: string;
                export const Id: string;
                export const LanguageId: string;
                export const Name: string;
                export const OfferCategoryTaskDescription: string;
                export const OfferCategoryTaskDevelopmentTimeHours: string;
                export const OfferCategoryTaskId: string;
                export const OfferCategoryTaskName: string;
                export const OfferCategoryTaskOfferCategoryId: string;
                export const OfferCategoryTaskParentOfferCategoryTaskId: string;
                export const OfferCategoryTaskTaskStatusId: string;
            }

            namespace OfferStatuses {
                export const BackgroundColor: string;
                export const BorderColor: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Name: string;
                export const NoteList: string;
                export const OfferStatusId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace OfferStatusesLang {
                export const Id: string;
                export const LanguageId: string;
                export const Name: string;
                export const OfferStatusBackgroundColor: string;
                export const OfferStatusBorderColor: string;
                export const OfferStatusId: string;
                export const OfferStatusName: string;
            }

            namespace Offers {
                export const AdditionalInfo: string;
                export const CompanyAddress: string;
                export const CompanyCityId: string;
                export const CompanyId: string;
                export const CompanyName: string;
                export const CompanyPhone: string;
                export const CompanyPrimaryAccountId: string;
                export const Discount: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const MaximumDaysDevelopmentTime: string;
                export const MinimumDaysDevelopmentTime: string;
                export const Name: string;
                export const NoteList: string;
                export const OfferId: string;
                export const OfferStatusBackgroundColor: string;
                export const OfferStatusBorderColor: string;
                export const OfferStatusId: string;
                export const OfferStatusName: string;
                export const StartDate: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace OffersLang {
                export const AdditionalInfo: string;
                export const Id: string;
                export const LanguageId: string;
                export const Name: string;
                export const OfferAdditionalInfo: string;
                export const OfferCompanyId: string;
                export const OfferDiscount: string;
                export const OfferId: string;
                export const OfferMaximumDaysDevelopmentTime: string;
                export const OfferMinimumDaysDevelopmentTime: string;
                export const OfferName: string;
                export const OfferOfferStatusId: string;
                export const OfferStartDate: string;
            }

            namespace TaskStatuses {
                export const BackgroundColor: string;
                export const BorderColor: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Name: string;
                export const NoteList: string;
                export const TaskStatusId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace TaskStatusesLang {
                export const Id: string;
                export const LanguageId: string;
                export const Name: string;
                export const TaskStatusBackgroundColor: string;
                export const TaskStatusBorderColor: string;
                export const TaskStatusId: string;
                export const TaskStatusName: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    OMP['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Note:{EntityId:1,EntityType:1,InsertDate:1,InsertUserDisplayName:1,InsertUserId:1,NoteId:1,Text:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Offers:{Accounts:{AccountId:1,Address:1,CityCountryId:1,CityId:1,CityName:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Name:1,NoteList:1,Phone:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},AccountsLang:{AccountAddress:1,AccountCityId:1,AccountId:1,AccountName:1,AccountPhone:1,Address:1,Id:1,LanguageId:1,Name:1},Categories:{CategoryId:1,FontColor:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Name:1,NoteList:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},CategoriesLang:{CategoryFontColor:1,CategoryId:1,CategoryName:1,Id:1,LanguageId:1,Name:1},Cities:{CityId:1,CountryId:1,CountryName:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Name:1,NoteList:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},CitiesLang:{CityCountryId:1,CityId:1,CityName:1,Id:1,LanguageId:1,Name:1},Companies:{Address:1,CityCountryId:1,CityId:1,CityName:1,CompanyId:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Name:1,NoteList:1,Phone:1,PrimaryAccountAddress:1,PrimaryAccountCityId:1,PrimaryAccountId:1,PrimaryAccountName:1,PrimaryAccountPhone:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},CompaniesLang:{Address:1,CompanyAddress:1,CompanyCityId:1,CompanyId:1,CompanyName:1,CompanyPhone:1,CompanyPrimaryAccountId:1,Id:1,LanguageId:1,Name:1},Countries:{CountryId:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Name:1,NoteList:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},CountriesLang:{CountryId:1,Id:1,LanguageId:1,Name:1},OfferCategories:{CategoryFontColor:1,CategoryFontColorReport:1,CategoryId:1,CategoryName:1,CategoryNameReport:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,NoteList:1,OfferAdditionalInfo:1,OfferCategoryId:1,OfferCompanyId:1,OfferDiscount:1,OfferId:1,OfferMaximumDaysDevelopmentTime:1,OfferMinimumDaysDevelopmentTime:1,OfferName:1,OfferOfferStatusId:1,OfferStartDate:1,Price:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},OfferCategoriesLang:{CategoryNameReport:1,Id:1,LanguageId:1,OfferCategoryCategoryFontColorReport:1,OfferCategoryCategoryId:1,OfferCategoryCategoryNameReport:1,OfferCategoryId:1,OfferCategoryOfferId:1,OfferCategoryPrice:1},OfferCategoryTasks:{Description:1,DevelopmentTimeHours:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Name:1,NoteList:1,OfferCategoryCategoryFontColorReport:1,OfferCategoryCategoryId:1,OfferCategoryCategoryNameReport:1,OfferCategoryId:1,OfferCategoryOfferId:1,OfferCategoryPrice:1,OfferCategoryTaskId:1,OfferName:1,ParentOfferCategoryTaskDescription:1,ParentOfferCategoryTaskDevelopmentTimeHours:1,ParentOfferCategoryTaskId:1,ParentOfferCategoryTaskName:1,ParentOfferCategoryTaskOfferCategoryId:1,ParentOfferCategoryTaskParentOfferCategoryTaskId:1,ParentOfferCategoryTaskTaskStatusId:1,TaskStatusBackgroundColor:1,TaskStatusBorderColor:1,TaskStatusId:1,TaskStatusName:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},OfferCategoryTasksLang:{Description:1,Id:1,LanguageId:1,Name:1,OfferCategoryTaskDescription:1,OfferCategoryTaskDevelopmentTimeHours:1,OfferCategoryTaskId:1,OfferCategoryTaskName:1,OfferCategoryTaskOfferCategoryId:1,OfferCategoryTaskParentOfferCategoryTaskId:1,OfferCategoryTaskTaskStatusId:1},OfferStatuses:{BackgroundColor:1,BorderColor:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Name:1,NoteList:1,OfferStatusId:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},OfferStatusesLang:{Id:1,LanguageId:1,Name:1,OfferStatusBackgroundColor:1,OfferStatusBorderColor:1,OfferStatusId:1,OfferStatusName:1},Offers:{AdditionalInfo:1,CompanyAddress:1,CompanyCityId:1,CompanyId:1,CompanyName:1,CompanyPhone:1,CompanyPrimaryAccountId:1,Discount:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,MaximumDaysDevelopmentTime:1,MinimumDaysDevelopmentTime:1,Name:1,NoteList:1,OfferId:1,OfferStatusBackgroundColor:1,OfferStatusBorderColor:1,OfferStatusId:1,OfferStatusName:1,StartDate:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},OffersLang:{AdditionalInfo:1,Id:1,LanguageId:1,Name:1,OfferAdditionalInfo:1,OfferCompanyId:1,OfferDiscount:1,OfferId:1,OfferMaximumDaysDevelopmentTime:1,OfferMinimumDaysDevelopmentTime:1,OfferName:1,OfferOfferStatusId:1,OfferStartDate:1},TaskStatuses:{BackgroundColor:1,BorderColor:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Name:1,NoteList:1,TaskStatusId:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},TaskStatusesLang:{Id:1,LanguageId:1,Name:1,TaskStatusBackgroundColor:1,TaskStatusBorderColor:1,TaskStatusId:1,TaskStatusName:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
