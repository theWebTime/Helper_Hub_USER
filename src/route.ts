import { createRouter, createWebHistory } from "vue-router";
import HomePageOne from "./pages/HomePageOne.vue";
import NotFound from "./pages/NotFound.vue";
import EmptyLayout from "./layouts/EmptyLayout.vue";
import HomePageTwo from "./pages/HomePageTwo.vue";
import HomePageThree from "./pages/HomePageThree.vue";
import HomePageFour from "./pages/HomePageFour.vue";
import ServicesPage from "./pages/ServicesPage.vue";
import ServiceDetails from "./pages/ServiceDetails.vue";
import BrowseTasks from "./pages/BrowseTasks.vue";
import FindWorkers from "./pages/FindWorkers.vue";
import WorkerProfile from "./pages/WorkerProfile.vue";
import WorkerPortfolio from "./pages/WorkerPortfolio.vue";
import WorkerPortfolioDetails from "./components/workers/WorkerPortfolioDetails.vue";
import HireWorker from "./pages/HireWorker.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import BlogPage from "./pages/BlogPage.vue";
import BlogDetailsPage from "./pages/BlogDetailsPage.vue";
import ChatPage from "./pages/ChatPage.vue";
import FAQPage from "./pages/FAQPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import PrivacyPolicy from "./pages/PrivacyPolicy.vue";
import TermsConditions from "./pages/TermsConditions.vue";
import BecomeTasker from "./pages/BecomeTasker.vue";
import PostSteps from "./pages/PostSteps.vue";
import SignInPage from "./pages/SignInPage.vue";
// import ResetPassword from "./pages/ResetPassword.vue";
import SignUpPage from "./pages/SignUpPage.vue";
import DashboardHome from "./pages/dashboard/DashboardHome.vue";
import DashboardLayout from "./layouts/DashboardLayout.vue";
import DashboardServicesPage from "./pages/dashboard/DashboardServicesPage.vue";
import PaymentDetails from "./pages/dashboard/PaymentDetails.vue";
import WishList from "./pages/dashboard/WishList.vue";
import ReviewPage from "./pages/dashboard/ReviewPage.vue";
import ProfilePage from "./pages/dashboard/ProfilePage.vue";
import SettingsPage from "./pages/dashboard/SettingsPage.vue";
import EditProfile from "./pages/dashboard/EditProfile.vue";
import EditServices from "./pages/dashboard/EditServices.vue";
import ManageAddress from "./pages/dashboard/ManageAddress.vue";
import MyBooking from "./pages/dashboard/MyBooking.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePageFour,
      meta: { title: "Home - Helper Hub" },
    },
    // creating custom routes=
    /* {
      path: "/home-two",
      component: HomePageTwo,
      meta: { layout: EmptyLayout, title: "Home Two - Helper Hub" },
    },
    {
      path: "/home-three",
      component: HomePageThree,
      meta: { layout: EmptyLayout, title: "Home Three - Helper Hub" },
    },
    {
      path: "/home-four",
      component: HomePageFour,
      meta: { layout: EmptyLayout, title: "Home Four - Helper Hub" },
    }, */
    {
      path: "/services",
      component: ServicesPage,
      meta: { title: "All Services - Helper Hub" },
    },
    // {
    //   path: "/services/service-details",
    //   component: ServiceDetails,
    //   meta: { title: "Service Details - Helper Hub" },
    // },
    // {
    //   path: "/browse-tasks",
    //   component: BrowseTasks,
    //   meta: { title: "Browse Tasks - Helper Hub" },
    // },
    // {
    //   path: "/find-workers",
    //   component: FindWorkers,
    //   meta: { title: "Find Workers - Helper Hub" },
    // },
    /* 
    {
      path: "/worker-profile",
      component: WorkerProfile,
      meta: { title: "Workers Profile - Helper Hub", requiresAuth: true },
    },
    {
      path: "/find-workers/:name",
      component: WorkerProfile,
      meta: { title: "Workers Profile - Helper Hub" },
    },
    {
      path: "/hire-me",
      component: HireWorker,
      meta: { title: "Hire Worker - Helper Hub" },
    }, */
    {
      path: "/about-us",
      component: AboutUsPage,
      meta: { title: "About Us - Helper Hub" },
    },
    /*  {
       path: "/blog",
       component: BlogPage,
       meta: { title: "Blog - Helper Hub" },
     },
     {
       path: "/blog/blog-details",
       component: BlogDetailsPage,
       meta: { title: "Blog Details - Helper Hub" },
     },
     {
       path: "/blog/:title",
       component: BlogDetailsPage,
       meta: { title: "Blog Details - Helper Hub" },
     },
     {
       path: "/chat",
       component: ChatPage,
       meta: { title: "Chat - Helper Hub" },
     }, */
    {
      path: "/faq",
      component: FAQPage,
      meta: { title: "FAQ - Helper Hub" },
    },
    {
      path: "/contact",
      component: ContactPage,
      meta: { title: "Contact - Helper Hub" },
    },
    {
      path: "/privacy-policy",
      component: PrivacyPolicy,
      meta: { title: "Privacy Policy - Helper Hub" },
    },
    {
      path: "/terms-conditions",
      component: TermsConditions,
      meta: { title: "Terms & Conditions - Helper Hub" },
    },
    // {
    //   path: "/become-tasker",
    //   component: BecomeTasker,
    //   meta: { title: "Become Tasker - Helper Hub" },
    // },
    {
      path: "/book-now",
      component: PostSteps,
      meta: { layout: EmptyLayout, title: "Post A Task - Helper Hub Vue App", requiresAuth: true },
    },
    {
      path: "/sign-in",
      component: SignInPage,
      meta: { layout: EmptyLayout, title: "Sign In - Helper Hub" },
    },
    // {
    //   path: "/reset-password",
    //   component: ResetPassword,
    //   meta: { layout: EmptyLayout, title: "Sign In - Helper Hub" },
    // },
    {
      path: "/sign-up",
      component: SignUpPage,
      meta: { layout: EmptyLayout, title: "Sign Up - Helper Hub" },
    },
    /* {
      path: "/worker-portfolio",
      component: WorkerPortfolio,
      meta: {
        layout: EmptyLayout,
        title: "Workers Portfolio - Helper Hub",
      },
    },
    {
      path: "/worker-portfolio-details",
      component: WorkerPortfolioDetails,
      meta: {
        layout: EmptyLayout,
        title: "Workers Portfolio Details - Helper Hub",
      },
    }, */

    // Dashboard Pages
    // {
    //   path: "/dashboard/home",
    //   component: DashboardHome,
    //   meta: { layout: DashboardLayout, title: "Dashboard - Helper Hub" },
    // },
    // {
    //   path: "/dashboard/services",
    //   component: DashboardServicesPage,
    //   meta: { layout: DashboardLayout, title: "Services - Helper Hub" },
    // },

    // {
    //   path: "/dashboard/payout-history",
    //   component: PaymentDetails,
    //   meta: {
    //     layout: DashboardLayout,
    //     title: "Payment Details - Helper Hub",
    //   },
    // },

    /* {
      path: "/dashboard/wishlist",
      component: WishList,
      meta: {
        layout: DashboardLayout,
        title: "Wishlist - Helper Hub",
      },
    },

    {
      path: "/dashboard/reviews",
      component: ReviewPage,
      meta: {
        layout: DashboardLayout,
        title: "Reviews - Helper Hub",
      },
    }, */

    {
      path: "/profile",
      component: ProfilePage,
      meta: {
        // layout: DashboardLayout,
        title: "Profile - Helper Hub",
        requiresAuth: true,
      },
    },
    {
      path: "/my-booking",
      component: MyBooking,
      meta: {
        // layout: DashboardLayout,
        title: "My Booking - Helper Hub",
        requiresAuth: true,
      },
    },
    {
      path: "/manage-address",
      component: ManageAddress,
      meta: {
        // layout: DashboardLayout,
        title: "Address - Helper Hub",
        requiresAuth: true,
      },
    },
    // {
    //   path: "/dashboard/edit-profile",
    //   component: EditProfile,
    //   meta: {
    //     layout: DashboardLayout,
    //     title: "Edit Profile - Helper Hub",
    //   },
    // },
    // {
    //   path: "/dashboard/settings",
    //   component: SettingsPage,
    //   meta: {
    //     layout: DashboardLayout,
    //     title: "Edit Profile - Helper Hub",
    //   },
    // },
    // {
    //   path: "/dashboard/edit-service",
    //   component: EditServices,
    //   meta: {
    //     layout: DashboardLayout,
    //     title: "Edit Services - Helper Hub",
    //   },
    // },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
      meta: {
        layout: EmptyLayout,
        title: "Not Found - Helper Hub",
      },
    },
  ],
});
