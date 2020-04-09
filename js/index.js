const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
const setNav = () => {
const navData = siteContent.nav;
const navElements = document.getElementsByTagName('nav')[0].children;
for (const property in navData) {
  if (property.includes('src')) {
    document.getElementById('logo-img').setAttribute('src', navData['img-src']);
    continue;
  }
  navElements[parseInt(property.substr(-1)) - 1].innerText = navData[property];
};
}

const setCta = () => {
  const ctaData = siteContent.cta;
  const ctaElements = document.getElementsByClassName('cta-text')[0];

  for (const property in ctaData) {
    console.log(property);
    if (property.includes('src')) {
      //console.log('Replacing the image src');
      document.getElementById('cta-img').setAttribute('src', ctaData['img-src']);
      continue;
    }
    //console.log(`Replacing the innerText of the ${property} tag`);
    ctaElements.getElementsByTagName(property)[0].innerText = ctaData[property];
  }
};

const setMainContent = () => {
  const mainContentData = siteContent['main-content'];
  const mainContentElements = document.getElementsByClassName('main-content')[0].getElementsByClassName('text-content');
  let childLocation = 0;
    for (const property in mainContentData) {
      if (property.includes('src')) {
        document.getElementById('middle-img').setAttribute('src', mainContentData['middle-img-src']);
        continue;
      }
      if (property.includes('h4')) {
        mainContentElements[childLocation].getElementsByTagName('h4')[0].innerText = mainContentData[property];
    }
      if (property.includes('content')) {
        mainContentElements[childLocation].getElementsByTagName('p')[0].innerText = mainContentData[property];
        childLocation += 1;
    }
  }
};

const setContact = () => {
  //Information from site JSON
  const contactData = siteContent.contact;

  //DOM elements we want to manipulate
  const contactElements = document.getElementsByClassName('contact')[0];

  let childLocation = 0;

  // Looping over each property (key) of the JSON data we singled out
  for (const property in contactData) {
    if (property.includes('h4')) {
      contactElements.getElementsByTagName('h4')[0].innerText = contactData[property];
      continue;
    }

    //Setup this loops p tag data
    contactElements.getElementsByTagName('p')[childLocation].innerText = contactData[property];
    
    //Incrrement to next p tag
    childLocation += 1;
  }
}

const setupPage = () => {
  setNav();
  setCta();
  setMainContent();
  setContact();
}

setupPage();

//Example: Update the img src for the logo
//let logo = document.getElementById("logo-img");
//logo.setAttribute('src', siteContent["nav"]["img-src"]);