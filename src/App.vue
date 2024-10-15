<script>

import {defineComponent, onMounted, onUnmounted} from "vue";
import LanguageSwitcher from "@/public/components/language-switcher.component.vue";

export default defineComponent({
  name: 'App',
  components: {LanguageSwitcher},
  setup() {
    const handleScroll = () => {
      const navibar = document.querySelector('.navibar');
      if (window.scrollY > 0) {
        navibar.classList.add('scrolled');
      } else {
        navibar.classList.remove('scrolled');
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  }
})
</script>

<template>
  <div>
    <header>
      <pv-toolbar class="navibar">
        <template #start>
          <a href="#splash">
            <img src="./assets/images/FinzarLogo.png" alt="Finzar" width="150px"/>
          </a>
        </template>

        <template #center>
          <a href="#services" class="nav-spacer"> {{ $t('toolbar.services') }} </a>
          <a href="#aboutus" class="nav-spacer"> {{ $t('toolbar.about') }} </a>
          <a href="#mission" class="nav-spacer"> {{ $t('toolbar.mission') }} </a>
          <a href="#videos" class="nav-spacer"> {{ $t('toolbar.product') }} </a>
          <a href="#contact" class="nav-spacer"> {{ $t('toolbar.contact') }} </a>
        </template>

        <template #end>
          <language-switcher/>
        </template>
      </pv-toolbar>
    </header>

    <section id="splash">
      <div class="splash-container">
        <div class="image">
          <img src="./assets/images/Laptop.png" alt="Laptop">
        </div>
        <div class="intro">
          <img src="./assets/images/FinzarLogo.png" alt="Finzar"> <br>
          <span style="font-size: 50px; font-weight: bold;"> {{ $t('splash.propietary') }} </span> <br>
          <span style="font-size: 30px; margin: 20px"> {{ $t('splash.subtitle') }} </span> <br>
          <span style="font-size: 20px"> {{ $t('splash.slang') }} </span> <br><br>
          <pv-button class="login"> {{ $t('splash.button') }} </pv-button>
        </div>
      </div>
    </section>

    <section id="services">
      <div class="service-container">
        <div class="section-title"> {{ $t('services.title') }} </div>
        <div class="section-content">
          <pv-card class="card">
            <template #header>
              <div style="height: 320px; background-color: black">
                <img src="./assets/images/service1.png" alt="Service 1" width="100%">
              </div>
            </template>
            <template #title>
              <div style="height: 100px">
                <h3 style="font-weight: bold"> {{ $t('services.manage.title') }} </h3>
              </div>
            </template>
            <template #content>
              <div style="height: 120px">
                <p> {{ $t('services.manage.description') }} </p>
              </div>
            </template>
          </pv-card>
          <span style="padding: 20px"/>
          <pv-card class="card">
            <template #header>
              <div style="height: 320px; align-content: center; background-color: black">
                <img src="./assets/images/service2.png" alt="Service 2" width="100%">
              </div>
            </template>
            <template #title>
              <div style="height: 100px">
                <h3 style="font-weight: bold"> {{ $t('services.savings.title') }} </h3>
              </div>
            </template>
            <template #content>
              <div style="height: 120px">
                <p> {{ $t('services.savings.description') }} </p>
              </div>
            </template>
          </pv-card>
          <span style="padding: 20px"/>
          <pv-card class="card">
            <template #header>
              <div style="height:320px; background-color: black">
                <img src="./assets/images/service3.png" alt="Service 3" width="100%">
              </div>
            </template>
            <template #title>
              <div style="height: 100px">
                <h3 style="font-weight: bold"> {{ $t('services.statistics.title') }} </h3>
              </div>
            </template>
            <template #content>
              <div style="height: 120px">
                <p> {{ $t('services.statistics.description') }} </p>
              </div>
            </template>
          </pv-card>
        </div>
      </div>
    </section>



      <section id="features">
        <div class="features-container">
          <div class="section-title">{{ $t('features.title') }}</div>
          <div class="section-content">

            <!-- Feature 1: Metas de ahorro -->
            <div class="feature-card">
              <i class="pi pi-dollar feature-icon"></i>
              <h3 class="feature-title">{{ $t('features.savingsGoals.title') }}</h3>
              <p class="feature-description">{{ $t('features.savingsGoals.description') }}</p>
            </div>

            <!-- Feature 2: Overview de Wallets -->
            <div class="feature-card">
              <i class="pi pi-wallet feature-icon"></i>
              <h3 class="feature-title">{{ $t('features.walletsOverview.title') }}</h3>
              <p class="feature-description">{{ $t('features.walletsOverview.description') }}</p>
            </div>

            <!-- Feature 3: Progreso en tiempo real -->
            <div class="feature-card">
              <i class="pi pi-chart-line feature-icon"></i>
              <h3 class="feature-title">{{ $t('features.realTimeProgress.title') }}</h3>
              <p class="feature-description">{{ $t('features.realTimeProgress.description') }}</p>
            </div>

            <!-- Feature 4: Categorizar transacciones -->
            <div class="feature-card">
              <i class="pi pi-folder-open feature-icon"></i>
              <h3 class="feature-title">{{ $t('features.transactionCategorization.title') }}</h3>
              <p class="feature-description">{{ $t('features.transactionCategorization.description') }}</p>
            </div>

          </div>
        </div>
      </section>


    <section id="aboutus">
      <div class="aboutus-container">
        <div>
          <h1 style="font-size: 50px; font-weight: bold"> {{ $t('about.title') }} </h1>
          <p style="margin-right:150px; margin-left: 150px; font-size: 25px; font-weight: bold"> {{ $t('about.description') }} </p>
        </div>
        <span style="padding: 20px"/>
        <div class="logos">
          <img src="./assets/images/finzar-logo.png" alt="Finzar Logo" height="200px">
          <span style="padding: 50px"/>
          <img src="./assets/images/upc-logo.png" alt="UPC Logo" height="200px">
        </div>
      </div>
    </section>

    <section id="mission">
      <div class="mission-container">
        <div class="section-title"> {{ $t('mission.title') }} </div>
        <div class="section-content">
          <pv-fieldset class="field">
            <template #legend>
                <img src="./assets/images/Mission.png" alt="Mission" width="150px"/>
            </template>
            <h1 style="font-weight: bold"> {{ $t('mission.mission.title') }} </h1>
            <p style="font-weight: bold"> {{ $t('mission.mission.description') }} </p>
          </pv-fieldset>
          <pv-fieldset class="field">
            <template #legend>
              <img src="./assets/images/Vision.png" alt="Vision" width="150px"/>
            </template>
            <h1 style="font-weight: bold"> {{ $t('mission.vision.title') }} </h1>
            <p style="font-weight: bold"> {{ $t('mission.vision.description') }} </p>
          </pv-fieldset>
          <pv-fieldset class="field">
            <template #legend>
              <img src="./assets/images/Values.png" alt="Values" width="150px"/>
            </template>
            <h1 style="font-weight: bold"> {{ $t('mission.values.title') }} </h1>
            <p style="font-weight: bold"> {{ $t('mission.values.description') }} </p>
          </pv-fieldset>
        </div>
      </div>
    </section>

    <section id="videos">
      <div class="videos-container">
        <div class="column">
          <div class="video-placeholder"></div>
          <h1 style="font-size: 40px; font-weight: bold"> {{ $t('product.team') }} </h1>
        </div>
        <div class="column">
          <div class="video-placeholder"></div>
          <h1 style="font-size: 40px; font-weight: bold"> {{ $t('product.product') }} </h1>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="contact-container">
        <div>
          <pv-card class="contact-card">
            <template #title>
              <h1 style="font-size: 40px; font-weight: bold"> {{ $t('contact.title') }} </h1>
            </template>
            <template #content>
              <div style="padding: 10px">
                <pv-input-text :placeholder="$t('contact.form.name')" class="contact-form" style="width: 40%;"/>
                <pv-input-text :placeholder="$t('contact.form.email')" class="contact-form"  style="width: 40%;"/>
              </div>
              <div style="padding: 10px">
                <pv-input-text :placeholder="$t('contact.form.subject')"  class="contact-form" style="width: 80%;"/>
              </div>
              <div style="padding: 10px">
                <pv-textarea :placeholder="$t('contact.form.message')" class="contact-form" style="width: 80%; height: 250px;"/>
              </div>
              <div>
                <pv-button style="background-color: #00aced; color: #ffffff"> {{ $t('contact.form.button') }} </pv-button>
              </div>
            </template>
          </pv-card>
        </div>
      </div>
    </section>

    <footer>
      <pv-toolbar class="footer">
        <template #center>
          <a href="#splash" class="nav-spacer" style="font-size:30px; font-weight: bold">SmartFinance</a>
          <a class="nav-spacer"> {{ $t('footer.privacy') }} </a>
          <a class="nav-spacer"> {{ $t('footer.cookies') }} </a>
          <a class="nav-spacer"> {{ $t('footer.legal') }} </a>
          <a> {{ $t('footer.contact') }} </a>
        </template>
      </pv-toolbar>
    </footer>
  </div>
</template>

<style scoped>
/* --------------- */
/* Navigation Bar */
/* --------------- */
.navibar {
  border-radius: 0;
  background-color: #000000;
  border: 0;
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 1;
  .nav-spacer {
    font-weight: bold;
    padding: 15px;
  }
}
.navibar a:hover {
  text-decoration: underline;
}

/* -------------------- */
/* General Containers */
/* -------------------- */
.splash-container,
.service-container,
.aboutus-container,
.mission-container,
.videos-container,
.contact-container {
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #f8f8f8;
}

/* ----------------- */
/* Splash Container */
/* ----------------- */
.splash-container {
  min-height: 100vh;
  display: flex;
  background: rgb(87,87,87);
  background: linear-gradient(180deg, rgba(87,87,87,1) 0%, rgba(0,0,0,1) 100%);
  .image {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .intro {
    flex: 1;
    padding: 20px;
    text-align: center;
  }
  .login {
    font-size: 30px;
    background-color: #000000;
    border: #ffffff solid 4px;
    color: #f8f8f8;
  }
  .login:hover {
    background-color: #3497d9;
    border: #ffffff solid 4px;
    color: #f8f8f8;
  }
}

/* ------------------ */
/* Service Container */
/* ------------------ */
.service-container {
  min-height: 100vh;
  align-content: center;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(52,151,217,1) 37%);
  .section-title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    padding: 20px;
  }
  .section-content {
    display: flex;
    justify-content: center;
  }
  .card {
    width: 20%;
    padding: 5px;
    border: rgba(96, 98, 100, 0.62) solid 6px;
  }
}

/* --------------------- */
/* About Us Container */
/* --------------------- */
.aboutus-container {
  min-height: 100vh;
  background-image: url('assets/images/team-background.png');
  background-size: cover;
  background-position: center;
  align-content: center;
  text-align: center;
}

/* ------------------- */
/* Mission Container */
/* ------------------- */
.mission-container {
  color: #000000;
  min-height: 60vh;
  background-color: #ffffff;
  align-content: center;
  text-align: center;
  .section-title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    padding: 20px;
  }
  .section-content {
    display: flex;
    justify-content: space-around;
  }
  .field {
    width: 20%;
    border: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    padding: 10px;
    background-color: #00ADEF;
    border-radius: 10px;
  }
}

/* ------------------ */
/* Videos Container */
/* ------------------ */
.videos-container {
  min-height: 70vh;
  display: flex;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(24,24,24,1) 17%);
  .column {
    flex: 1;
    text-align: center;
  }
  .video-placeholder {
    width: 640px; /* Adjust size as needed */
    height: 360px; /* Adjust size as needed */
    background-color: #cccccc; /* Placeholder color */
    margin: 20px auto; /* Center the placeholder */
  }
}

/* ------------------- */
/* Contact Container */
/* ------------------- */
.contact-container {
  min-height: 70vh;
  background-color: #acabaf;
  display: flex;
  text-align: center;
  .contact-card {
    background-color: #eeeeee;
    border-top: #00aced solid 8px;
    color: black;
    width: 1200px;
    justify-content: center;
    .contact-form {
      background-color: #f8f8f8;
      border: 0;
      color: black
    }
  }
}

/* ----------- */
/* Footer Bar */
/* ----------- */
.footer {
  border-radius: 0;
  background-color: #000000;
  border: 0;
  width: 100%;
  position: relative;
  .nav-spacer {
    padding: 15px;
  }
}

.features-container {
  min-height: 80vh;
  background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000000;
  padding: 50px 0;
}

.section-title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
}

.section-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}

.feature-card {
  background-color: #f5f5f5;
  width: 250px;
  text-align: center;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 40px;
  color: #00ADEF;
  margin-bottom: 15px;
}

.feature-title {
  font-size: 24px;
  font-weight: bold;
}

.feature-description {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}


</style>
