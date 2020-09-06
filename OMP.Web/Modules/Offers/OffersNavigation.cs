using Serenity.Navigation;
using MyPages = OMP.Offers.Pages;

[assembly: NavigationLink(1000, "Offers", typeof(MyPages.OffersController), icon: "fa-file-text-o")]
                      
[assembly: NavigationMenu(1000, "Organization", icon: "fa-sitemap")]
[assembly: NavigationLink(1000, "Organization/Countries", typeof(MyPages.CountriesController), icon: null)]
[assembly: NavigationLink(1000, "Organization/Cities", typeof(MyPages.CitiesController), icon: null)]
[assembly: NavigationLink(1000, "Organization/Accounts", typeof(MyPages.AccountsController), icon: null)]
[assembly: NavigationLink(1000, "Organization/Companies", typeof(MyPages.CompaniesController), icon: null)]
                      
[assembly: NavigationMenu(1000, "Offers Settings", icon: "fa-folder-o")]
[assembly: NavigationLink(1000, "Offers Settings/Categories", typeof(MyPages.CategoriesController), icon: null)]
[assembly: NavigationLink(1000, "Offers Settings/Offer Statuses", typeof(MyPages.OfferStatusesController), icon: null)]
[assembly: NavigationLink(1000, "Offers Settings/Task Statuses", typeof(MyPages.TaskStatusesController), icon: null)]
[assembly: NavigationLink(1000, "Offers Settings/Offer Categories", typeof(MyPages.OfferCategoriesController), icon: null)]
[assembly: NavigationLink(1000, "Offers Settings/Offer Category Tasks", typeof(MyPages.OfferCategoryTasksController), icon: null)]