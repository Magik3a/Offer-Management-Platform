using Serenity.Navigation;
using MyPages = OMP.Offers.Pages;

[assembly: NavigationLink(int.MaxValue, "Offers/Countries", typeof(MyPages.CountriesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Offers/Cities", typeof(MyPages.CitiesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Offers/Accounts", typeof(MyPages.AccountsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Offers/Companies", typeof(MyPages.CompaniesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Offers/Offer Statuses", typeof(MyPages.OfferStatusesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Offers/Offers", typeof(MyPages.OffersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Offers/Task Statuses", typeof(MyPages.TaskStatusesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Offers/Categories", typeof(MyPages.CategoriesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Offers/Offer Categories", typeof(MyPages.OfferCategoriesController), icon: null)]