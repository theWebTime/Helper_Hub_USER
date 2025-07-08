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

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePageOne,
      meta: { title: "Home - Helper Hub Vue App" },
    },
    {
      path: "/home-two",
      component: HomePageTwo,
      meta: { layout: EmptyLayout, title: "Home Two - Helper Hub Vue App" },
    },
    {
      path: "/home-three",
      component: HomePageThree,
      meta: { layout: EmptyLayout, title: "Home Three - Helper Hub Vue App" },
    },
    {
      path: "/home-four",
      component: HomePageFour,
      meta: { layout: EmptyLayout, title: "Home Four - Helper Hub Vue App" },
    },
    {
      path: "/services",
      component: ServicesPage,
      meta: { title: "All Services - Helper Hub Vue App" },
    },
    {
      path: "/services/service-details",
      component: ServiceDetails,
      meta: { title: "Service Details - Helper Hub Vue App" },
    },
    {
      path: "/browse-tasks",
      component: BrowseTasks,
      meta: { title: "Browse Tasks - Helper Hub Vue App" },
    },
    {
      path: "/find-workers",
      component: FindWorkers,
      meta: { title: "Find Workers - Helper Hub Vue App" },
    },
    {
      path: "/worker-profile",
      component: WorkerProfile,
      meta: { title: "Workers Profile - Helper Hub Vue App", requiresAuth: true },
    },
    {
      path: "/find-workers/:name",
      component: WorkerProfile,
      meta: { title: "Workers Profile - Helper Hub Vue App" },
    },
    {
      path: "/hire-me",
      component: HireWorker,
      meta: { title: "Hire Worker - Helper Hub Vue App" },
    },
    {
      path: "/about-us",
      component: AboutUsPage,
      meta: { title: "About Us - Helper Hub Vue App" },
    },
    {
      path: "/blog",
      component: BlogPage,
      meta: { title: "Blog - Helper Hub Vue App" },
    },
    {
      path: "/blog/blog-details",
      component: BlogDetailsPage,
      meta: { title: "Blog Details - Helper Hub Vue App" },
    },
    {
      path: "/blog/:title",
      component: BlogDetailsPage,
      meta: { title: "Blog Details - Helper Hub Vue App" },
    },
    {
      path: "/chat",
      component: ChatPage,
      meta: { title: "Chat - Helper Hub Vue App" },
    },
    {
      path: "/faq",
      component: FAQPage,
      meta: { title: "FAQ - Helper Hub Vue App" },
    },
    {
      path: "/contact",
      component: ContactPage,
      meta: { title: "Contact - Helper Hub Vue App" },
    },
    {
      path: "/privacy-policy",
      component: PrivacyPolicy,
      meta: { title: "Privacy Policy - Helper Hub Vue App" },
    },
    {
      path: "/terms-conditions",
      component: TermsConditions,
      meta: { title: "Terms & Conditions - Helper Hub Vue App" },
    },
    {
      path: "/become-tasker",
      component: BecomeTasker,
      meta: { title: "Become Tasker - Helper Hub Vue App" },
    },
    {
      path: "/post-task",
      component: PostSteps,
      meta: { layout: EmptyLayout, title: "Post A Task - Helper Hub Vue App" },
    },
    {
      path: "/sign-in",
      component: SignInPage,
      meta: { layout: EmptyLayout, title: "Sign In - Helper Hub Vue App" },
    },
    {
      path: "/sign-up",
      component: SignUpPage,
      meta: { layout: EmptyLayout, title: "Sign Up - Helper Hub Vue App" },
    },
    {
      path: "/worker-portfolio",
      component: WorkerPortfolio,
      meta: {
        layout: EmptyLayout,
        title: "Workers Portfolio - Helper Hub Vue App",
      },
    },
    {
      path: "/worker-portfolio-details",
      component: WorkerPortfolioDetails,
      meta: {
        layout: EmptyLayout,
        title: "Workers Portfolio Details - Helper Hub Vue App",
      },
    },

    // Dashboard Pages
    {
      path: "/dashboard/home",
      component: DashboardHome,
      meta: { layout: DashboardLayout, title: "Dashboard - Helper Hub Vue App" },
    },
    {
      path: "/dashboard/services",
      component: DashboardServicesPage,
      meta: { layout: DashboardLayout, title: "Services - Helper Hub Vue App" },
    },

    {
      path: "/dashboard/payout-history",
      component: PaymentDetails,
      meta: {
        layout: DashboardLayout,
        title: "Payment Details - Helper Hub Vue App",
      },
    },

    {
      path: "/dashboard/wishlist",
      component: WishList,
      meta: {
        layout: DashboardLayout,
        title: "Wishlist - Helper Hub Vue App",
      },
    },

    {
      path: "/dashboard/reviews",
      component: ReviewPage,
      meta: {
        layout: DashboardLayout,
        title: "Reviews - Helper Hub Vue App",
      },
    },

    {
      path: "/dashboard/profile",
      component: ProfilePage,
      meta: {
        // layout: DashboardLayout,
        title: "Profile - Helper Hub Vue App",
        requiresAuth: true,
      },
    },
    {
      path: "/dashboard/edit-profile",
      component: EditProfile,
      meta: {
        layout: DashboardLayout,
        title: "Edit Profile - Helper Hub Vue App",
      },
    },
    {
      path: "/dashboard/settings",
      component: SettingsPage,
      meta: {
        layout: DashboardLayout,
        title: "Edit Profile - Helper Hub Vue App",
      },
    },
    {
      path: "/dashboard/edit-service",
      component: EditServices,
      meta: {
        layout: DashboardLayout,
        title: "Edit Services - Helper Hub Vue App",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
      meta: {
        layout: EmptyLayout,
        title: "Not Found - Helper Hub Vue App",
      },
    },
  ],
});
