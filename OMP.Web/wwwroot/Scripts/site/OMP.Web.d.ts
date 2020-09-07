/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace OMP.Administration {
}
declare namespace OMP.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace OMP.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace OMP.Administration {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Administration.Note";
        const deletePermission: any;
        const insertPermission: any;
        const readPermission = "";
        const updatePermission: any;
        const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName"
        }
    }
}
declare namespace OMP.Administration {
}
declare namespace OMP.Administration {
}
declare namespace OMP.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace OMP.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace OMP.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace OMP.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace OMP.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace OMP.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace OMP.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace OMP.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace OMP.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace OMP.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace OMP.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace OMP.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ListConnections = "Administration/Sergen/ListConnections",
            ListTables = "Administration/Sergen/ListTables",
            Generate = "Administration/Sergen/Generate"
        }
    }
}
declare namespace OMP.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace OMP.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace OMP.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace OMP.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace OMP.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace OMP.Administration {
}
declare namespace OMP.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace OMP.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace OMP.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace OMP.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace OMP.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace OMP.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace OMP.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace OMP.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace OMP.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace OMP.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace OMP.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace OMP.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace OMP.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace OMP.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace OMP.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace OMP.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace OMP {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace OMP {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace OMP {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace OMP {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace OMP.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace OMP.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace OMP.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace OMP.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace OMP.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace OMP.Offers {
}
declare namespace OMP.Offers {
    interface AccountsForm {
        Name: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        CityId: Serenity.LookupEditor;
    }
    class AccountsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Offers {
    interface AccountsLangRow {
        Id?: number;
        AccountId?: number;
        LanguageId?: number;
        Name?: string;
        Address?: string;
        AccountName?: string;
        AccountAddress?: string;
        AccountPhone?: string;
        AccountCityId?: number;
    }
    namespace AccountsLangRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.AccountsLang";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            AccountId = "AccountId",
            LanguageId = "LanguageId",
            Name = "Name",
            Address = "Address",
            AccountName = "AccountName",
            AccountAddress = "AccountAddress",
            AccountPhone = "AccountPhone",
            AccountCityId = "AccountCityId"
        }
    }
}
declare namespace OMP.Offers {
    namespace AccountsLangService {
        const baseUrl = "Offers/AccountsLang";
        function Create(request: Serenity.SaveRequest<AccountsLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AccountsLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountsLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountsLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/AccountsLang/Create",
            Update = "Offers/AccountsLang/Update",
            Delete = "Offers/AccountsLang/Delete",
            Retrieve = "Offers/AccountsLang/Retrieve",
            List = "Offers/AccountsLang/List"
        }
    }
}
declare namespace OMP.Offers {
    interface AccountsRow {
        AccountId?: number;
        Name?: string;
        Address?: string;
        Phone?: string;
        CityId?: number;
        CityName?: string;
        CityCountryId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }
    namespace AccountsRow {
        const idProperty = "AccountId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.Accounts";
        const lookupKey = "Offers.Accounts";
        function getLookup(): Q.Lookup<AccountsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AccountId = "AccountId",
            Name = "Name",
            Address = "Address",
            Phone = "Phone",
            CityId = "CityId",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            NoteList = "NoteList"
        }
    }
}
declare namespace OMP.Offers {
    namespace AccountsService {
        const baseUrl = "Offers/Accounts";
        function Create(request: Serenity.SaveRequest<AccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/Accounts/Create",
            Update = "Offers/Accounts/Update",
            Delete = "Offers/Accounts/Delete",
            Retrieve = "Offers/Accounts/Retrieve",
            Undelete = "Offers/Accounts/Undelete",
            List = "Offers/Accounts/List"
        }
    }
}
declare namespace OMP.Offers {
}
declare namespace OMP.Offers {
    interface CategoriesForm {
        Name: Serenity.StringEditor;
        FontColor: ColorPickerEditor;
    }
    class CategoriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Offers {
    interface CategoriesLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        Name?: string;
        CategoryName?: string;
        CategoryFontColor?: string;
    }
    namespace CategoriesLangRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.CategoriesLang";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            CategoryId = "CategoryId",
            LanguageId = "LanguageId",
            Name = "Name",
            CategoryName = "CategoryName",
            CategoryFontColor = "CategoryFontColor"
        }
    }
}
declare namespace OMP.Offers {
    namespace CategoriesLangService {
        const baseUrl = "Offers/CategoriesLang";
        function Create(request: Serenity.SaveRequest<CategoriesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoriesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoriesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoriesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/CategoriesLang/Create",
            Update = "Offers/CategoriesLang/Update",
            Delete = "Offers/CategoriesLang/Delete",
            Retrieve = "Offers/CategoriesLang/Retrieve",
            List = "Offers/CategoriesLang/List"
        }
    }
}
declare namespace OMP.Offers {
    interface CategoriesRow {
        CategoryId?: number;
        Name?: string;
        FontColor?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }
    namespace CategoriesRow {
        const idProperty = "CategoryId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.Categories";
        const lookupKey = "Offers.Categories";
        function getLookup(): Q.Lookup<CategoriesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CategoryId = "CategoryId",
            Name = "Name",
            FontColor = "FontColor",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            NoteList = "NoteList"
        }
    }
}
declare namespace OMP.Offers {
    namespace CategoriesService {
        const baseUrl = "Offers/Categories";
        function Create(request: Serenity.SaveRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/Categories/Create",
            Update = "Offers/Categories/Update",
            Delete = "Offers/Categories/Delete",
            Undelete = "Offers/Categories/Undelete",
            Retrieve = "Offers/Categories/Retrieve",
            List = "Offers/Categories/List"
        }
    }
}
declare namespace OMP.Offers {
}
declare namespace OMP.Offers {
    interface CitiesForm {
        Name: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
    }
    class CitiesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Offers {
    interface CitiesLangRow {
        Id?: number;
        CityId?: number;
        LanguageId?: number;
        Name?: string;
        CityName?: string;
        CityCountryId?: number;
    }
    namespace CitiesLangRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.CitiesLang";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            CityId = "CityId",
            LanguageId = "LanguageId",
            Name = "Name",
            CityName = "CityName",
            CityCountryId = "CityCountryId"
        }
    }
}
declare namespace OMP.Offers {
    namespace CitiesLangService {
        const baseUrl = "Offers/CitiesLang";
        function Create(request: Serenity.SaveRequest<CitiesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CitiesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CitiesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CitiesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/CitiesLang/Create",
            Update = "Offers/CitiesLang/Update",
            Delete = "Offers/CitiesLang/Delete",
            Retrieve = "Offers/CitiesLang/Retrieve",
            List = "Offers/CitiesLang/List"
        }
    }
}
declare namespace OMP.Offers {
    interface CitiesRow {
        CityId?: number;
        Name?: string;
        CountryId?: number;
        CountryName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }
    namespace CitiesRow {
        const idProperty = "CityId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.Cities";
        const lookupKey = "Offers.Cities";
        function getLookup(): Q.Lookup<CitiesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CityId = "CityId",
            Name = "Name",
            CountryId = "CountryId",
            CountryName = "CountryName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            NoteList = "NoteList"
        }
    }
}
declare namespace OMP.Offers {
    namespace CitiesService {
        const baseUrl = "Offers/Cities";
        function Create(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/Cities/Create",
            Update = "Offers/Cities/Update",
            RetrieveLocalization = "Offers/Cities/RetrieveLocalization",
            Delete = "Offers/Cities/Delete",
            Undelete = "Offers/Cities/Undelete",
            Retrieve = "Offers/Cities/Retrieve",
            List = "Offers/Cities/List"
        }
    }
}
declare namespace OMP.Offers {
}
declare namespace OMP.Offers {
    interface CompaniesForm {
        Name: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        CityId: Serenity.LookupEditor;
        PrimaryAccountId: Serenity.LookupEditor;
    }
    class CompaniesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Offers {
    interface CompaniesLangRow {
        Id?: number;
        CompanyId?: number;
        LanguageId?: number;
        Name?: string;
        Address?: string;
        CompanyName?: string;
        CompanyAddress?: string;
        CompanyPhone?: string;
        CompanyCityId?: number;
        CompanyPrimaryAccountId?: number;
    }
    namespace CompaniesLangRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.CompaniesLang";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            CompanyId = "CompanyId",
            LanguageId = "LanguageId",
            Name = "Name",
            Address = "Address",
            CompanyName = "CompanyName",
            CompanyAddress = "CompanyAddress",
            CompanyPhone = "CompanyPhone",
            CompanyCityId = "CompanyCityId",
            CompanyPrimaryAccountId = "CompanyPrimaryAccountId"
        }
    }
}
declare namespace OMP.Offers {
    namespace CompaniesLangService {
        const baseUrl = "Offers/CompaniesLang";
        function Create(request: Serenity.SaveRequest<CompaniesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompaniesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompaniesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompaniesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/CompaniesLang/Create",
            Update = "Offers/CompaniesLang/Update",
            Delete = "Offers/CompaniesLang/Delete",
            Retrieve = "Offers/CompaniesLang/Retrieve",
            List = "Offers/CompaniesLang/List"
        }
    }
}
declare namespace OMP.Offers {
    interface CompaniesRow {
        CompanyId?: number;
        Name?: string;
        Address?: string;
        Phone?: string;
        CityId?: number;
        PrimaryAccountId?: number;
        CityName?: string;
        CityCountryId?: number;
        PrimaryAccountName?: string;
        PrimaryAccountAddress?: string;
        PrimaryAccountPhone?: string;
        PrimaryAccountCityId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }
    namespace CompaniesRow {
        const idProperty = "CompanyId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.Companies";
        const lookupKey = "Offers.Companies";
        function getLookup(): Q.Lookup<CompaniesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CompanyId = "CompanyId",
            Name = "Name",
            Address = "Address",
            Phone = "Phone",
            CityId = "CityId",
            PrimaryAccountId = "PrimaryAccountId",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            PrimaryAccountName = "PrimaryAccountName",
            PrimaryAccountAddress = "PrimaryAccountAddress",
            PrimaryAccountPhone = "PrimaryAccountPhone",
            PrimaryAccountCityId = "PrimaryAccountCityId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            NoteList = "NoteList"
        }
    }
}
declare namespace OMP.Offers {
    namespace CompaniesService {
        const baseUrl = "Offers/Companies";
        function Create(request: Serenity.SaveRequest<CompaniesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompaniesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompaniesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompaniesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/Companies/Create",
            Update = "Offers/Companies/Update",
            Undelete = "Offers/Companies/Undelete",
            Delete = "Offers/Companies/Delete",
            Retrieve = "Offers/Companies/Retrieve",
            List = "Offers/Companies/List"
        }
    }
}
declare namespace OMP.Offers {
}
declare namespace OMP.Offers {
    interface CountriesForm {
        Name: Serenity.StringEditor;
    }
    class CountriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Offers {
    interface CountriesLangRow {
        Id?: number;
        CountryId?: number;
        LanguageId?: number;
        Name?: string;
    }
    namespace CountriesLangRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.CountriesLang";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            CountryId = "CountryId",
            LanguageId = "LanguageId",
            Name = "Name"
        }
    }
}
declare namespace OMP.Offers {
    namespace CountriesLangService {
        const baseUrl = "Offers/CountriesLang";
        function Create(request: Serenity.SaveRequest<CountriesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CountriesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CountriesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CountriesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/CountriesLang/Create",
            Update = "Offers/CountriesLang/Update",
            Delete = "Offers/CountriesLang/Delete",
            Retrieve = "Offers/CountriesLang/Retrieve",
            List = "Offers/CountriesLang/List"
        }
    }
}
declare namespace OMP.Offers {
    interface CountriesRow {
        CountryId?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }
    namespace CountriesRow {
        const idProperty = "CountryId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.Countries";
        const lookupKey = "Offers.Countries";
        function getLookup(): Q.Lookup<CountriesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CountryId = "CountryId",
            Name = "Name",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            NoteList = "NoteList"
        }
    }
}
declare namespace OMP.Offers {
    namespace CountriesService {
        const baseUrl = "Offers/Countries";
        function Create(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CountriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CountriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/Countries/Create",
            Update = "Offers/Countries/Update",
            Delete = "Offers/Countries/Delete",
            Undelete = "Offers/Countries/Undelete",
            RetrieveLocalization = "Offers/Countries/RetrieveLocalization",
            Retrieve = "Offers/Countries/Retrieve",
            List = "Offers/Countries/List"
        }
    }
}
declare namespace OMP.Offers {
}
declare namespace OMP.Offers {
    interface OfferCategoriesForm {
        OfferId: Serenity.LookupEditor;
        CategoryId: Serenity.LookupEditor;
        Price: Serenity.DecimalEditor;
        CategoryNameReport: Serenity.StringEditor;
        CategoryFontColorReport: ColorPickerEditor;
    }
    class OfferCategoriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Offers {
    interface OfferCategoriesLangRow {
        Id?: number;
        OfferCategoryId?: number;
        LanguageId?: number;
        CategoryNameReport?: string;
        OfferCategoryOfferId?: number;
        OfferCategoryCategoryId?: number;
        OfferCategoryPrice?: number;
        OfferCategoryCategoryNameReport?: string;
        OfferCategoryCategoryFontColorReport?: string;
    }
    namespace OfferCategoriesLangRow {
        const idProperty = "Id";
        const nameProperty = "CategoryNameReport";
        const localTextPrefix = "Offers.OfferCategoriesLang";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            OfferCategoryId = "OfferCategoryId",
            LanguageId = "LanguageId",
            CategoryNameReport = "CategoryNameReport",
            OfferCategoryOfferId = "OfferCategoryOfferId",
            OfferCategoryCategoryId = "OfferCategoryCategoryId",
            OfferCategoryPrice = "OfferCategoryPrice",
            OfferCategoryCategoryNameReport = "OfferCategoryCategoryNameReport",
            OfferCategoryCategoryFontColorReport = "OfferCategoryCategoryFontColorReport"
        }
    }
}
declare namespace OMP.Offers {
    namespace OfferCategoriesLangService {
        const baseUrl = "Offers/OfferCategoriesLang";
        function Create(request: Serenity.SaveRequest<OfferCategoriesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OfferCategoriesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OfferCategoriesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OfferCategoriesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/OfferCategoriesLang/Create",
            Update = "Offers/OfferCategoriesLang/Update",
            Delete = "Offers/OfferCategoriesLang/Delete",
            Retrieve = "Offers/OfferCategoriesLang/Retrieve",
            List = "Offers/OfferCategoriesLang/List"
        }
    }
}
declare namespace OMP.Offers {
    interface OfferCategoriesRow {
        OfferCategoryId?: number;
        OfferId?: number;
        CategoryId?: number;
        Price?: number;
        CategoryNameReport?: string;
        CategoryFontColorReport?: string;
        OfferName?: string;
        OfferDiscount?: number;
        OfferMinimumDaysDevelopmentTime?: number;
        OfferMaximumDaysDevelopmentTime?: number;
        OfferStartDate?: string;
        OfferAdditionalInfo?: string;
        OfferCompanyId?: number;
        OfferOfferStatusId?: number;
        CategoryName?: string;
        CategoryFontColor?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }
    namespace OfferCategoriesRow {
        const idProperty = "OfferCategoryId";
        const isActiveProperty = "IsActive";
        const nameProperty = "CategoryNameReport";
        const localTextPrefix = "Offers.OfferCategories";
        const lookupKey = "Offers.OfferCategories";
        function getLookup(): Q.Lookup<OfferCategoriesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            OfferCategoryId = "OfferCategoryId",
            OfferId = "OfferId",
            CategoryId = "CategoryId",
            Price = "Price",
            CategoryNameReport = "CategoryNameReport",
            CategoryFontColorReport = "CategoryFontColorReport",
            OfferName = "OfferName",
            OfferDiscount = "OfferDiscount",
            OfferMinimumDaysDevelopmentTime = "OfferMinimumDaysDevelopmentTime",
            OfferMaximumDaysDevelopmentTime = "OfferMaximumDaysDevelopmentTime",
            OfferStartDate = "OfferStartDate",
            OfferAdditionalInfo = "OfferAdditionalInfo",
            OfferCompanyId = "OfferCompanyId",
            OfferOfferStatusId = "OfferOfferStatusId",
            CategoryName = "CategoryName",
            CategoryFontColor = "CategoryFontColor",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            NoteList = "NoteList"
        }
    }
}
declare namespace OMP.Offers {
    namespace OfferCategoriesService {
        const baseUrl = "Offers/OfferCategories";
        function Create(request: Serenity.SaveRequest<OfferCategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OfferCategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OfferCategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OfferCategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/OfferCategories/Create",
            Update = "Offers/OfferCategories/Update",
            Delete = "Offers/OfferCategories/Delete",
            Undelete = "Offers/OfferCategories/Undelete",
            Retrieve = "Offers/OfferCategories/Retrieve",
            List = "Offers/OfferCategories/List"
        }
    }
}
declare namespace OMP.Offers {
}
declare namespace OMP.Offers {
    interface OfferCategoryTasksForm {
        Name: Serenity.StringEditor;
        DevelopmentTimeHours: Serenity.DecimalEditor;
        TaskStatusId: Serenity.LookupEditor;
        OfferCategoryOfferId: Serenity.LookupEditor;
        ParentOfferCategoryTaskId: Serenity.LookupEditor;
        OfferCategoryId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
    }
    class OfferCategoryTasksForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Offers {
    interface OfferCategoryTasksLangRow {
        Id?: number;
        OfferCategoryTaskId?: number;
        LanguageId?: number;
        Name?: string;
        Description?: string;
        OfferCategoryTaskName?: string;
        OfferCategoryTaskDevelopmentTimeHours?: number;
        OfferCategoryTaskDescription?: string;
        OfferCategoryTaskParentOfferCategoryTaskId?: number;
        OfferCategoryTaskOfferCategoryId?: number;
        OfferCategoryTaskTaskStatusId?: number;
    }
    namespace OfferCategoryTasksLangRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.OfferCategoryTasksLang";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            OfferCategoryTaskId = "OfferCategoryTaskId",
            LanguageId = "LanguageId",
            Name = "Name",
            Description = "Description",
            OfferCategoryTaskName = "OfferCategoryTaskName",
            OfferCategoryTaskDevelopmentTimeHours = "OfferCategoryTaskDevelopmentTimeHours",
            OfferCategoryTaskDescription = "OfferCategoryTaskDescription",
            OfferCategoryTaskParentOfferCategoryTaskId = "OfferCategoryTaskParentOfferCategoryTaskId",
            OfferCategoryTaskOfferCategoryId = "OfferCategoryTaskOfferCategoryId",
            OfferCategoryTaskTaskStatusId = "OfferCategoryTaskTaskStatusId"
        }
    }
}
declare namespace OMP.Offers {
    namespace OfferCategoryTasksLangService {
        const baseUrl = "Offers/OfferCategoryTasksLang";
        function Create(request: Serenity.SaveRequest<OfferCategoryTasksLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OfferCategoryTasksLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OfferCategoryTasksLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OfferCategoryTasksLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/OfferCategoryTasksLang/Create",
            Update = "Offers/OfferCategoryTasksLang/Update",
            Delete = "Offers/OfferCategoryTasksLang/Delete",
            Retrieve = "Offers/OfferCategoryTasksLang/Retrieve",
            List = "Offers/OfferCategoryTasksLang/List"
        }
    }
}
declare namespace OMP.Offers {
    interface OfferCategoryTasksRow {
        OfferCategoryTaskId?: number;
        Name?: string;
        DevelopmentTimeHours?: number;
        Description?: string;
        ParentOfferCategoryTaskId?: number;
        OfferCategoryId?: number;
        TaskStatusId?: number;
        ParentOfferCategoryTaskName?: string;
        ParentOfferCategoryTaskDevelopmentTimeHours?: number;
        ParentOfferCategoryTaskDescription?: string;
        ParentOfferCategoryTaskParentOfferCategoryTaskId?: number;
        ParentOfferCategoryTaskOfferCategoryId?: number;
        ParentOfferCategoryTaskTaskStatusId?: number;
        OfferCategoryOfferId?: number;
        OfferCategoryCategoryId?: number;
        OfferCategoryPrice?: number;
        OfferCategoryCategoryNameReport?: string;
        OfferCategoryCategoryFontColorReport?: string;
        TaskStatusName?: string;
        TaskStatusBorderColor?: string;
        TaskStatusBackgroundColor?: string;
        OfferName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }
    namespace OfferCategoryTasksRow {
        const idProperty = "OfferCategoryTaskId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.OfferCategoryTasks";
        const lookupKey = "Offers.OfferCategoryTasks";
        function getLookup(): Q.Lookup<OfferCategoryTasksRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            OfferCategoryTaskId = "OfferCategoryTaskId",
            Name = "Name",
            DevelopmentTimeHours = "DevelopmentTimeHours",
            Description = "Description",
            ParentOfferCategoryTaskId = "ParentOfferCategoryTaskId",
            OfferCategoryId = "OfferCategoryId",
            TaskStatusId = "TaskStatusId",
            ParentOfferCategoryTaskName = "ParentOfferCategoryTaskName",
            ParentOfferCategoryTaskDevelopmentTimeHours = "ParentOfferCategoryTaskDevelopmentTimeHours",
            ParentOfferCategoryTaskDescription = "ParentOfferCategoryTaskDescription",
            ParentOfferCategoryTaskParentOfferCategoryTaskId = "ParentOfferCategoryTaskParentOfferCategoryTaskId",
            ParentOfferCategoryTaskOfferCategoryId = "ParentOfferCategoryTaskOfferCategoryId",
            ParentOfferCategoryTaskTaskStatusId = "ParentOfferCategoryTaskTaskStatusId",
            OfferCategoryOfferId = "OfferCategoryOfferId",
            OfferCategoryCategoryId = "OfferCategoryCategoryId",
            OfferCategoryPrice = "OfferCategoryPrice",
            OfferCategoryCategoryNameReport = "OfferCategoryCategoryNameReport",
            OfferCategoryCategoryFontColorReport = "OfferCategoryCategoryFontColorReport",
            TaskStatusName = "TaskStatusName",
            TaskStatusBorderColor = "TaskStatusBorderColor",
            TaskStatusBackgroundColor = "TaskStatusBackgroundColor",
            OfferName = "OfferName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            NoteList = "NoteList"
        }
    }
}
declare namespace OMP.Offers {
    namespace OfferCategoryTasksService {
        const baseUrl = "Offers/OfferCategoryTasks";
        function Create(request: Serenity.SaveRequest<OfferCategoryTasksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OfferCategoryTasksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OfferCategoryTasksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OfferCategoryTasksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/OfferCategoryTasks/Create",
            Update = "Offers/OfferCategoryTasks/Update",
            Undelete = "Offers/OfferCategoryTasks/Undelete",
            Delete = "Offers/OfferCategoryTasks/Delete",
            Retrieve = "Offers/OfferCategoryTasks/Retrieve",
            List = "Offers/OfferCategoryTasks/List"
        }
    }
}
declare namespace OMP.Offers {
}
declare namespace OMP.Offers {
    interface OfferStatusesForm {
        Name: Serenity.StringEditor;
        BackgroundColor: ColorPickerEditor;
        BorderColor: ColorPickerEditor;
    }
    class OfferStatusesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Offers {
    interface OfferStatusesLangRow {
        Id?: number;
        OfferStatusId?: number;
        LanguageId?: number;
        Name?: string;
        OfferStatusName?: string;
        OfferStatusBorderColor?: string;
        OfferStatusBackgroundColor?: string;
    }
    namespace OfferStatusesLangRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.OfferStatusesLang";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            OfferStatusId = "OfferStatusId",
            LanguageId = "LanguageId",
            Name = "Name",
            OfferStatusName = "OfferStatusName",
            OfferStatusBorderColor = "OfferStatusBorderColor",
            OfferStatusBackgroundColor = "OfferStatusBackgroundColor"
        }
    }
}
declare namespace OMP.Offers {
    namespace OfferStatusesLangService {
        const baseUrl = "Offers/OfferStatusesLang";
        function Create(request: Serenity.SaveRequest<OfferStatusesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OfferStatusesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OfferStatusesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OfferStatusesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/OfferStatusesLang/Create",
            Update = "Offers/OfferStatusesLang/Update",
            Delete = "Offers/OfferStatusesLang/Delete",
            Retrieve = "Offers/OfferStatusesLang/Retrieve",
            List = "Offers/OfferStatusesLang/List"
        }
    }
}
declare namespace OMP.Offers {
    interface OfferStatusesRow {
        OfferStatusId?: number;
        Name?: string;
        BorderColor?: string;
        BackgroundColor?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }
    namespace OfferStatusesRow {
        const idProperty = "OfferStatusId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.OfferStatuses";
        const lookupKey = "Offers.OfferStatuses";
        function getLookup(): Q.Lookup<OfferStatusesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            OfferStatusId = "OfferStatusId",
            Name = "Name",
            BorderColor = "BorderColor",
            BackgroundColor = "BackgroundColor",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            NoteList = "NoteList"
        }
    }
}
declare namespace OMP.Offers {
    namespace OfferStatusesService {
        const baseUrl = "Offers/OfferStatuses";
        function Create(request: Serenity.SaveRequest<OfferStatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OfferStatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OfferStatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OfferStatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/OfferStatuses/Create",
            Update = "Offers/OfferStatuses/Update",
            Delete = "Offers/OfferStatuses/Delete",
            Undelete = "Offers/OfferStatuses/Undelete",
            Retrieve = "Offers/OfferStatuses/Retrieve",
            List = "Offers/OfferStatuses/List"
        }
    }
}
declare namespace OMP.Offers {
}
declare namespace OMP.Offers {
    interface OffersForm {
        Name: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        Discount: Serenity.DecimalEditor;
        MinimumDaysDevelopmentTime: Serenity.IntegerEditor;
        MaximumDaysDevelopmentTime: Serenity.IntegerEditor;
        CompanyId: Serenity.LookupEditor;
        OfferStatusId: Serenity.LookupEditor;
        AdditionalInfo: Serenity.TextAreaEditor;
        NoteList: Serenity.StringEditor;
    }
    class OffersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Offers {
    interface OffersLangRow {
        Id?: number;
        OfferId?: number;
        LanguageId?: number;
        Name?: string;
        AdditionalInfo?: string;
        OfferName?: string;
        OfferDiscount?: number;
        OfferMinimumDaysDevelopmentTime?: number;
        OfferMaximumDaysDevelopmentTime?: number;
        OfferStartDate?: string;
        OfferAdditionalInfo?: string;
        OfferCompanyId?: number;
        OfferOfferStatusId?: number;
    }
    namespace OffersLangRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.OffersLang";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            OfferId = "OfferId",
            LanguageId = "LanguageId",
            Name = "Name",
            AdditionalInfo = "AdditionalInfo",
            OfferName = "OfferName",
            OfferDiscount = "OfferDiscount",
            OfferMinimumDaysDevelopmentTime = "OfferMinimumDaysDevelopmentTime",
            OfferMaximumDaysDevelopmentTime = "OfferMaximumDaysDevelopmentTime",
            OfferStartDate = "OfferStartDate",
            OfferAdditionalInfo = "OfferAdditionalInfo",
            OfferCompanyId = "OfferCompanyId",
            OfferOfferStatusId = "OfferOfferStatusId"
        }
    }
}
declare namespace OMP.Offers {
    namespace OffersLangService {
        const baseUrl = "Offers/OffersLang";
        function Create(request: Serenity.SaveRequest<OffersLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OffersLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OffersLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OffersLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/OffersLang/Create",
            Update = "Offers/OffersLang/Update",
            Delete = "Offers/OffersLang/Delete",
            Retrieve = "Offers/OffersLang/Retrieve",
            List = "Offers/OffersLang/List"
        }
    }
}
declare namespace OMP.Offers {
    interface OffersRow {
        OfferId?: number;
        Name?: string;
        Discount?: number;
        MinimumDaysDevelopmentTime?: number;
        MaximumDaysDevelopmentTime?: number;
        StartDate?: string;
        AdditionalInfo?: string;
        CompanyId?: number;
        OfferStatusId?: number;
        CompanyName?: string;
        CompanyAddress?: string;
        CompanyPhone?: string;
        CompanyCityId?: number;
        CompanyPrimaryAccountId?: number;
        OfferStatusName?: string;
        OfferStatusBorderColor?: string;
        OfferStatusBackgroundColor?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }
    namespace OffersRow {
        const idProperty = "OfferId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.Offers";
        const lookupKey = "Offers.Offers";
        function getLookup(): Q.Lookup<OffersRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            OfferId = "OfferId",
            Name = "Name",
            Discount = "Discount",
            MinimumDaysDevelopmentTime = "MinimumDaysDevelopmentTime",
            MaximumDaysDevelopmentTime = "MaximumDaysDevelopmentTime",
            StartDate = "StartDate",
            AdditionalInfo = "AdditionalInfo",
            CompanyId = "CompanyId",
            OfferStatusId = "OfferStatusId",
            CompanyName = "CompanyName",
            CompanyAddress = "CompanyAddress",
            CompanyPhone = "CompanyPhone",
            CompanyCityId = "CompanyCityId",
            CompanyPrimaryAccountId = "CompanyPrimaryAccountId",
            OfferStatusName = "OfferStatusName",
            OfferStatusBorderColor = "OfferStatusBorderColor",
            OfferStatusBackgroundColor = "OfferStatusBackgroundColor",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            NoteList = "NoteList"
        }
    }
}
declare namespace OMP.Offers {
    namespace OffersService {
        const baseUrl = "Offers/Offers";
        function Create(request: Serenity.SaveRequest<OffersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OffersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OffersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OffersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/Offers/Create",
            Update = "Offers/Offers/Update",
            Delete = "Offers/Offers/Delete",
            Undelete = "Offers/Offers/Undelete",
            Retrieve = "Offers/Offers/Retrieve",
            List = "Offers/Offers/List"
        }
    }
}
declare namespace OMP.Offers {
}
declare namespace OMP.Offers {
    interface TaskStatusesForm {
        Name: Serenity.StringEditor;
        BackgroundColor: ColorPickerEditor;
        BorderColor: ColorPickerEditor;
    }
    class TaskStatusesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace OMP.Offers {
    interface TaskStatusesLangRow {
        Id?: number;
        TaskStatusId?: number;
        LanguageId?: number;
        Name?: string;
        TaskStatusName?: string;
        TaskStatusBorderColor?: string;
        TaskStatusBackgroundColor?: string;
    }
    namespace TaskStatusesLangRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.TaskStatusesLang";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            TaskStatusId = "TaskStatusId",
            LanguageId = "LanguageId",
            Name = "Name",
            TaskStatusName = "TaskStatusName",
            TaskStatusBorderColor = "TaskStatusBorderColor",
            TaskStatusBackgroundColor = "TaskStatusBackgroundColor"
        }
    }
}
declare namespace OMP.Offers {
    namespace TaskStatusesLangService {
        const baseUrl = "Offers/TaskStatusesLang";
        function Create(request: Serenity.SaveRequest<TaskStatusesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TaskStatusesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TaskStatusesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TaskStatusesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/TaskStatusesLang/Create",
            Update = "Offers/TaskStatusesLang/Update",
            Delete = "Offers/TaskStatusesLang/Delete",
            Retrieve = "Offers/TaskStatusesLang/Retrieve",
            List = "Offers/TaskStatusesLang/List"
        }
    }
}
declare namespace OMP.Offers {
    interface TaskStatusesRow {
        TaskStatusId?: number;
        Name?: string;
        BorderColor?: string;
        BackgroundColor?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
        NoteList?: Administration.NoteRow[];
    }
    namespace TaskStatusesRow {
        const idProperty = "TaskStatusId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Offers.TaskStatuses";
        const lookupKey = "Offers.TaskStatuses";
        function getLookup(): Q.Lookup<TaskStatusesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            TaskStatusId = "TaskStatusId",
            Name = "Name",
            BorderColor = "BorderColor",
            BackgroundColor = "BackgroundColor",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            NoteList = "NoteList"
        }
    }
}
declare namespace OMP.Offers {
    namespace TaskStatusesService {
        const baseUrl = "Offers/TaskStatuses";
        function Create(request: Serenity.SaveRequest<TaskStatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TaskStatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TaskStatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TaskStatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Offers/TaskStatuses/Create",
            Update = "Offers/TaskStatuses/Update",
            Delete = "Offers/TaskStatuses/Delete",
            Undelete = "Offers/TaskStatuses/Undelete",
            Retrieve = "Offers/TaskStatuses/Retrieve",
            List = "Offers/TaskStatuses/List"
        }
    }
}
declare namespace OMP {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace OMP.Texts {
}
declare namespace OMP.Web.Modules.Offers {
}
declare namespace OMP.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace OMP.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace OMP.Administration {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        get text(): string;
        set text(value: string);
        okClick: () => void;
    }
}
declare namespace OMP.Administration {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        get value(): NoteRow[];
        set value(value: NoteRow[]);
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace OMP.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace OMP.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace OMP.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace OMP.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace OMP.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace OMP.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace OMP.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace OMP.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace OMP.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace OMP.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace OMP.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace OMP.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace OMP {
    class ColorPickerEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
    }
}
declare namespace OMP.LanguageList {
    function getValue(): string[][];
}
declare namespace OMP.ScriptInitialization {
}
declare namespace OMP {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace OMP.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace OMP.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace OMP.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace OMP.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace OMP.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace OMP.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace OMP {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace OMP.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace OMP.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace OMP.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace OMP.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace OMP.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace OMP.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace OMP.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace OMP.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace OMP.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace OMP.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace OMP.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace OMP.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace OMP.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace OMP.Offers {
    class AccountsDialog extends Serenity.EntityDialog<AccountsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getIsActiveProperty(): string;
        protected form: AccountsForm;
    }
}
declare namespace OMP.Offers {
    class AccountsGrid extends Serenity.EntityGrid<AccountsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
    }
}
declare namespace OMP.Offers {
    class CategoriesDialog extends Serenity.EntityDialog<CategoriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getIsActiveProperty(): string;
        protected form: CategoriesForm;
    }
}
declare namespace OMP.Offers {
    class CategoriesGrid extends Serenity.EntityGrid<CategoriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
    }
}
declare namespace OMP.Offers {
    class CitiesDialog extends Serenity.EntityDialog<CitiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getIsActiveProperty(): string;
        protected form: CitiesForm;
    }
}
declare namespace OMP.Offers {
    class CitiesGrid extends Serenity.EntityGrid<CitiesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CitiesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
    }
}
declare namespace OMP.Offers {
    class CompaniesDialog extends Serenity.EntityDialog<CompaniesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getIsActiveProperty(): string;
        protected form: CompaniesForm;
    }
}
declare namespace OMP.Offers {
    class CompaniesGrid extends Serenity.EntityGrid<CompaniesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CompaniesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
    }
}
declare namespace OMP.Offers {
    class CountriesDialog extends Serenity.EntityDialog<CountriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getIsActiveProperty(): string;
        protected form: CountriesForm;
    }
}
declare namespace OMP.Offers {
    class CountriesGrid extends Serenity.EntityGrid<CountriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CountriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
    }
}
declare namespace OMP.Offers {
    class OfferCategoriesDialog extends Serenity.EntityDialog<OfferCategoriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getIsActiveProperty(): string;
        protected form: OfferCategoriesForm;
        private localizationPropertyGrid;
        constructor();
        onSaveSuccess(response: any): void;
    }
}
declare namespace OMP.Offers {
    class OfferCategoriesGrid extends Serenity.EntityGrid<OfferCategoriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OfferCategoriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace OMP.Offers {
    class OfferCategoryTasksDialog extends Serenity.EntityDialog<OfferCategoryTasksRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getIsActiveProperty(): string;
        protected form: OfferCategoryTasksForm;
        constructor();
        loadEntity(entity: OfferCategoryTasksRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace OMP.Offers {
    class OfferCategoryTasksGrid extends Serenity.EntityGrid<OfferCategoryTasksRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OfferCategoryTasksDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        private treeMixin;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace OMP.Offers {
    class OfferStatusesDialog extends Serenity.EntityDialog<OfferStatusesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getIsActiveProperty(): string;
        protected form: OfferStatusesForm;
    }
}
declare namespace OMP.Offers {
    class OfferStatusesGrid extends Serenity.EntityGrid<OfferStatusesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OfferStatusesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
    }
}
declare namespace OMP.Offers {
    class OfferOfferCategoriesDialog extends OfferCategoriesDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace OMP.Offers {
    class OfferOfferCategoriesGrid extends OfferCategoriesGrid {
        protected getDialogType(): typeof OfferOfferCategoriesDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _offerId;
        get offerId(): string;
        set offerId(value: string);
    }
}
declare namespace OMP.Offers {
    class OfferOfferCategoryTasksDialog extends OfferCategoryTasksDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace OMP.Offers {
    class OfferOfferCategoryTasksGrid extends OfferCategoryTasksGrid {
        protected getDialogType(): typeof OfferOfferCategoryTasksDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _offerId;
        get offerId(): string;
        set offerId(value: string);
    }
}
declare namespace OMP.Offers {
    class OffersDialog extends Serenity.EntityDialog<OffersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getIsActiveProperty(): string;
        protected form: OffersForm;
        private offerCategoryTasksGrid;
        private offerCategoriesGrid;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        loadEntity(entity: OffersRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace OMP.Offers {
    class OffersGrid extends Serenity.EntityGrid<OffersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OffersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected addButtonClick(): void;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace OMP.Offers {
    class TaskStatusesDialog extends Serenity.EntityDialog<TaskStatusesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getIsActiveProperty(): string;
        protected form: TaskStatusesForm;
    }
}
declare namespace OMP.Offers {
    class TaskStatusesGrid extends Serenity.EntityGrid<TaskStatusesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TaskStatusesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getIsActiveProperty(): string;
        constructor(container: JQuery);
    }
}
