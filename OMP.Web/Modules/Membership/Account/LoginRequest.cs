
namespace OMP.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow), CheckNames = true)]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("Enter Username")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("Enter Password"), Required(true)]
        public string Password { get; set; }
    }
}