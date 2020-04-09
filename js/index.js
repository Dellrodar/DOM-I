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

// Information from siteContent JSON
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
  // Information from siteContent JSON
  const ctaData = siteContent.cta;
  const ctaElements = document.getElementsByClassName('cta-text')[0];
  

  for (const property in ctaData) {

      if (property.includes('src')) {
      //console.log('Replacing the image src');
      document.getElementById('cta-img').setAttribute('src', ctaData['img-src']);
      continue;
    }
    let value = ctaData[property];
    if (property === 'h1') {
      value = 'DOM<br> Is<br> Awesome'
    }
    ctaElements.getElementsByTagName(property)[0].innerHTML = value;
  }
};

const setMainContent = () => {

  // Information from siteContent JSON
  const mainContentData = siteContent['main-content'];

  // DOM Elements we want to manipulate
  const mainContentElements = document.getElementsByClassName('main-content')[0].getElementsByClassName('text-content');

  // Setup variable to track location in the DOM p tags
  let childLocation = 0;

  // Looping over each property (key) of the JSON data we singled out
    for (const property in mainContentData) {
      if (property.includes('src')) {
        document.getElementById('middle-img').setAttribute('src', mainContentData['middle-img-src']);
        continue;
      }

      // This is h4 we have so lets get this set and continue the loop.
      if (property.includes('h4')) {
        mainContentElements[childLocation].getElementsByTagName('h4')[0].innerText = mainContentData[property];
    }
      // Setup this loops p tag data
      if (property.includes('content')) {
        mainContentElements[childLocation].getElementsByTagName('p')[0].innerText = mainContentData[property];
        // Increment to next p tag
        childLocation += 1;
    }
  }
};

const setContact = () => {

  // Information from siteContent JSON
  const contactData = siteContent.contact;

  // DOM Elements we want to manipulate
  const contactElements = document.getElementsByClassName('contact')[0];

  // Setup variable to track location in the DOM p tags
  let childLocation = 0;

  // Looping over each property (key) of the JSON data we singled out
  for (const property in contactData) {
    if (property.includes('h4')) {
      // This is the only h4 we have so lets get this set and continue the loop.
      contactElements.getElementsByTagName('h4')[0].innerText = contactData[property];
      continue;
    }

    let value = contactData[property];
    if (property === 'address') {
      // "123 Way 456 Street Somewhere, USA"
      value = value.replace(' Somewhere', '<br>Somewhere');
    }

    // Setup this loops p tag data
    contactElements.getElementsByTagName('p')[childLocation].innerHTML = value;

    // Increment to next p tag
    childLocation += 1;
  }
}


//"footer": {
//"copyright" : "Copyright Great Idea! 2018"

const setFooter = () => {
  document.getElementsByTagName('footer')[0].getElementsByTagName('p')[0].innerText = siteContent.footer.copyright;
  };

  const updateNavColor = () => {
    const navItems = document.getElementsByTagName('nav')[0].children;
    for (let i = 0; i < navItems.length; i += 1) {
      navItems[i].style.color = 'green';
    }
  }
  
  const createMenuItem = (name) => {
    let a = document.createElement('a');
    a.textContent = name;
    a.setAttribute('href', '#');
    return a;
  }
  
  const setupPage = () => {
    setNav();
    setCta();
    setMainContent();
    setContact();
    setFooter();
    updateNavColor();
    document.getElementsByTagName('nav')[0].appendChild(createMenuItem('Append'));
    document.getElementsByTagName('nav')[0].prepend(createMenuItem('Prepend'));
  }
  
  setupPage();

//Example: Update the img src for the logo
//let logo = document.getElementById("logo-img");
//logo.setAttribute('src', siteContent["nav"]["img-src"]);