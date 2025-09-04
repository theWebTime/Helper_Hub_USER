<template>
  <footer class="bg-n900 text-white relative">
    <section class="stp-10 overflow-hidden">
      <div class="4xl:large-container max-4xl:mx-4">

        <!-- ===== TOP SECTION (Reduced Height + No Logo) ===== -->
        <div class="container grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Company Info (Logo removed, shorter text) -->
          <div>
            <p class="text-gray-300 text-sm leading-6 max-w-xs">
              Helper Hub — Your trusted partner for cleaning, cooking, and home support services delivered to your
              doorstep.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-base font-semibold mb-3 text-white">Quick Links</h4>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li><router-link class="hover:text-v200 duration-300" to="/">Home</router-link></li>
              <li><router-link class="hover:text-v200 duration-300" to="/about-us">About Us</router-link></li>
              <li><router-link class="hover:text-v200 duration-300" to="/services">Services</router-link></li>
              <li><router-link class="hover:text-v200 duration-300" to="/faq">FAQ</router-link></li>
            </ul>
          </div>

          <!-- Policies -->
          <div>
            <h4 class="text-base font-semibold mb-3 text-white">Our Policies</h4>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li><router-link class="hover:text-v200 duration-300" to="/privacy-policy">Privacy Policy</router-link>
              </li>
              <li><router-link class="hover:text-v200 duration-300" to="/cancellation-refund">Cancellation &
                  Refund</router-link></li>
              <li><router-link class="hover:text-v200 duration-300" to="/terms">Terms & Conditions</router-link></li>
              <li><router-link class="hover:text-v200 duration-300" to="/contact">Contact Us</router-link></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-base font-semibold mb-3 text-white">Get in Touch</h4>
            <p class="text-gray-300 text-sm mb-1">{{ siteSettingStore.data?.address || '' }}</p>
            <p class="mb-1">
              <a :href="`tel:${siteSettingStore.data?.phone || ''}`" class="hover:text-v200">
                📞 {{ siteSettingStore.data?.phone || '' }}
              </a>
            </p>
            <p>
              <a :href="`mailto:${siteSettingStore.data?.email || ''}`" class="hover:text-v200">
                📧 {{ siteSettingStore.data?.email || '' }}
              </a>
            </p>
            <!-- Social Links -->
            <div class="flex gap-2 mt-3">
              <a v-for="{ id, icon, link } in socialLinks.slice(0, 3)" :key="id" :href="link" target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 text-gray-300 hover:border-v200 hover:text-v200 duration-300 text-sm">
                <component :is="icon" />
              </a>
            </div>
          </div>
        </div>

        <!-- ===== BOTTOM STRIP ===== -->
        <div class="border-t border-gray-700">
          <div
            class="container flex flex-col md:flex-row items-center justify-between py-4 gap-3 text-xs text-gray-400">
            <p>© {{ new Date().getFullYear() }} Helper Hub. All rights reserved.</p>
            <p>
              Developed by
              <a href="tel:+917862813861" class="text-v200 hover:underline">The Web Time IT Solution</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { useSocialLinks } from "../../../data/data";
import { useSiteSettingStore } from "../../../stores/siteSettingStore";

const siteSettingStore = useSiteSettingStore();
const socialLinks = useSocialLinks();
</script>
