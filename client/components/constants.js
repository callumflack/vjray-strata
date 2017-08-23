const contactDetails = {
    phone: '1300 073 405',
    emergencyAfterHours: '0418 245 545',
    emergencyBusinessHours: '9784 7900'
}

const emergencyList = [{
  headline: 'Is it due to a natural disaster?',
  text: 'In the case of a natural disaster such as a major storm or flood etc please contact the NSW State Emergency Service on 132 500.',
}, {
  headline: 'Is it a rental property?',
  text: 'If your repair relates to a property that you are renting through one of our offices please go to the V J Ray Group website.'
}, {
  headline: 'Is it within business hours?',
  text: 'Please contact us by telephone on 9784 7900 if your repair is urgent and during office hours. Please don\'t rely on an email for an urgent repair as your strata manager may not see the email in time to contact the relevant repairer.',
}, {
  headline: 'Is it after hours?',
  text: 'For after hours emergency repairs only contact our director Mike Pollard on 0418 245 545. Note that additional charges will apply for after hour repairs.',
}, {
  headline: 'Is it really urgent?',
  text: 'For non-urgent repairs please use the form below and provide us as much detail as possible about your repair request.',
}]

const icons = {
    logo: `M21.28,63.93,19.2,62.86c-.42-.22-.53-.36-.53-.55s.19-.38.62-.38a4.81,4.81,0,0,1,2.47.81l1.19-2.44a7.61,7.61,0,0,0-3.45-.85c-2.54,0-3.8,1.26-3.8,3.06a3.06,3.06,0,0,0,1.79,2.86l2.21,1.11c.32.16.49.29.49.53s-.32.45-.85.45a5.46,5.46,0,0,1-3.16-1.24L14.9,68.86A8.59,8.59,0,0,0,19.18,70c2.59,0,4-1.13,4-3.21A2.93,2.93,0,0,0,21.28,63.93ZM44.87,20,5.09,44.15,5,44.32h9.88L15,53.43l60.15.09v-9L85,44.4ZM27.43,49.22c-1.9.36-1.3-2.11-.43-2.75h.52l.52.43A2,2,0,0,1,27.43,49.22Zm.43-11.77L24.08,49.39l-2.58.09L19.26,39.25l2-1.29,1.46,7.39v.17h.09l3.35-10.66L29,33.15C29.17,33.42,28.09,36.69,27.86,37.44Zm3.7,9.71-.26-4.38,1.63-1.46.26-.09c.64,2.62-.75,4.12,1.37,5.5,2.29-.18,1.89-2.41,1.89-4.81l.09-13.23,2.32-1.55.09,5.07c0,4,.68,13.06-1,15.38C36.42,49.6,32.61,49.71,31.55,47.15Zm8.68,2.06a1.27,1.27,0,0,1-1-2c.2-.42.39-.46.77-.69a1.43,1.43,0,0,1,1,.69A1.53,1.53,0,0,1,40.23,49.22Zm11.94.09H50.11c-.6-1.6-1.79-8.89-3-9.19l-.17,9.11-2.15.09q0-12.8.09-25.61c3.45,1.72,8.12,4.07,6.87,9.88a7.32,7.32,0,0,1-2.15,4.3L52.18,49Zm9.37,0-1.37-5.41H56.64L55.1,49.22a5.15,5.15,0,0,1-2,.17L53,49.3,58.1,31.69c2.43,1.19,2,2.38,2.75,5.16l2.92,12.55Zm7.22-4.64-.17,4.64H66.44c0-6.63-1.57-9.86-3.35-14.61l2.58,1.55,2.06,5.59,1.55-3.27a3.67,3.67,0,0,1,1.8,1C70.81,41.47,69.31,43,68.76,44.66ZM42.92,63c0-1.75-1.14-3.32-3.82-3.32H34.78V69.78h2.75V66l2.6,3.76h3.43L40.75,66A3,3,0,0,0,42.92,63Zm-4.19,1.27h-1.2V62.09h1.2c.84,0,1.34.32,1.34,1.07S39.56,64.26,38.73,64.26ZM24.67,62.18H27.2v7.6h2.75v-7.6h2.53V59.67h-7.8ZM47,27.65v9.28h.09a5.93,5.93,0,0,0,1.72-7.65C48.41,28.5,48.06,27.79,47,27.65Zm21.25,32L64.35,69.78h3L68,67.89h3.45l.62,1.89h3L71.2,59.67Zm.43,6.05,1-3.16,1,3.16ZM58.53,37.36l-1.2,4.3h2.32l-.95-4.3ZM49,59.67,45.07,69.78h3l.62-1.89h3.45l.62,1.89h3L51.92,59.67Zm.43,6.05,1-3.16,1,3.16Zm6.77-3.54h2.53v7.6h2.75v-7.6H64V59.67h-7.8Z`,

    emergency: 'M29.65,61.67c-.77.79-7.52,7.8-7.52,12.08a8.26,8.26,0,0,0,16.52,0c0-4.3-6.75-11.3-7.52-12.08A1.07,1.07,0,0,0,29.65,61.67Zm.73,18.27a6.21,6.21,0,0,1-6.2-6.2c0-2.6,4-7.43,6.2-9.85,2.23,2.42,6.2,7.26,6.2,9.85A6.21,6.21,0,0,1,30.38,79.93ZM76.83,28.32H64.45v-1a1,1,0,0,0-1-1V24.6l8.11,1.6a3.53,3.53,0,0,0,.63.06,3.93,3.93,0,0,0,3.65-4.13c0-2.52-2-4.51-4.28-4.07l-8.11,1.6V19a1,1,0,0,0-1-1H58.25a1,1,0,0,0-1,1v.63l-8.1-1.6c-2.27-.44-4.28,1.56-4.28,4.07a3.92,3.92,0,0,0,3.65,4.13,2.59,2.59,0,0,0,.63-.08l8.1-1.6v1.66a1,1,0,0,0-1,1v1H37.62A13.44,13.44,0,0,0,24.2,41.75V53.09h-1a1,1,0,0,0-1,1v4.13a1,1,0,0,0,1,1H39.68a1,1,0,0,0,1-1V54.12a1,1,0,0,0-1-1h-1V43.81a1,1,0,0,1,1-1h16.5v1a1,1,0,0,0,1,1h6.2a1,1,0,0,0,1-1v-1H76.83a1,1,0,0,0,1-1V29.35A1,1,0,0,0,76.83,28.32ZM63.42,21.77l8.5-1.68c1-.2,1.83.82,1.83,2s-.87,2.23-1.83,2l-8.5-1.68ZM38.65,57.23H24.2V55.17H38.65ZM56.19,40.72H39.68a3.1,3.1,0,0,0-3.1,3.1v9.27H26.26V41.75A11.36,11.36,0,0,1,37.62,30.4H56.19Zm1-18.21-8.49,1.67c-1,.19-1.83-.82-1.83-2a1.9,1.9,0,0,1,1.59-2.07h.24l8.49,1.67Zm2.07.84V20.07h2.07v6.19H59.29Zm3.1,6V42.77H58.25v-1s0,0,0-.06V29.36s0,0,0-.06v-1h4.13ZM75.8,40.72H64.45V30.4H75.8Z',

    service: 'M49,35.77A24.81,24.81,0,0,0,25.22,60.52v1H74.77v-1A24.79,24.79,0,0,0,51,35.77V32.65h3.1V30.58H45.87v2.07H49ZM72.69,59.5H27.31a22.71,22.71,0,0,1,45.38,0ZM33.82,53.69a17.47,17.47,0,0,1,3.77-5.58,17.67,17.67,0,0,1,5.58-3.77l-.81-1.9a19.54,19.54,0,0,0-6.24,4.21,19.75,19.75,0,0,0-4.21,6.24Zm-1.25-19-4.12-4.64-1.54,1.37L31,36.08Zm45.29,35.1v-6.2H22.13v6.2H18v2.07H82V69.81Zm-2.05,0H24.2V65.68H75.81ZM36.18,28.24l-2.06-.12-.37,6.19,2.06.12Zm-5.7,9-6.19-.37-.11,2.05,6.17.37Z',

    lockin: 'M48.95,37.51h2.12V35.4H48.95Zm-4.24,0h2.12V35.4H44.71Zm9.52,24.33H52.12V58.68a5.29,5.29,0,0,1,10.58,0v4.24h2.12V58.68a7.41,7.41,0,0,0-14.81,0v3.17H35.19V77.71h19ZM52.12,75.59H37.31V64H52.12Zm-6.35-7.41H43.65v4.24h2.12ZM74.33,80.88V48.09h7.91L50,17,37.31,29.24V20.59H28.85V37.4L17.75,48.09h7.91V80.88H17.21V83H82.79V80.88ZM31,22.7h4.24v8.57L31,35.36ZM23,46l27-26L77,46ZM72.22,80.88H27.78V48.09H72.22Zm-19-45.49v2.12h2.12V35.4Z',

    experience: 'M67.76,53.19l-4.17,9L51,37.17v-5H70.52l-3.67-7.34,3.67-7.33H48.91V37.19L36.1,65.49,29.9,54.79,18,82.5H82ZM51,19.6H67.13l-2.62,5.25,2.62,5.25H51ZM50,39.85l4.3,8.56-1.5.42L50,46.53,47.29,48.8l-1.15-.4ZM21.15,80.39l9-20.95L35,67.84,29.36,80.39ZM45.28,50.33l2.44.87,2.33-1.92,2.29,1.89,2.93-.84,7.19,14.32L56.35,77.88l1.91.87,9.56-20.66L78.69,80.41h-47ZM24.79,40.57H35.29a5.25,5.25,0,0,0,5.25-5.25,5.16,5.16,0,0,0-2.2-4.25A5.24,5.24,0,0,0,29.94,26a6.14,6.14,0,0,0-.95-.08,6.26,6.26,0,0,0-6,4.53,5.24,5.24,0,0,0,1.83,10.15Zm-.72-8.3.67-.15.13-.68A4.19,4.19,0,0,1,29,28a3.75,3.75,0,0,1,1,.14l.58.14.42-.41a3.13,3.13,0,0,1,5.14,3.34l-.35.9.87.42a3.13,3.13,0,0,1-1.36,6H24.79a3.14,3.14,0,0,1-.72-6.21Z',

    contents: 'M52.19,69.28H50.07v4.24h2.12ZM48.95,37.51h2.12V35.4H48.95ZM74.33,80.88V48.09h7.91L50,17,37.31,29.24V20.59H28.85V37.4L17.75,48.09h7.91V80.88H17.21V83H82.79V80.88ZM31,22.7h4.24v8.57L31,35.36ZM23,46l27-26L77,46ZM72.22,80.88H27.78V48.09H72.22ZM44.71,37.51h2.12V35.4H44.71ZM60.65,62.94H58.53V59.76a7.41,7.41,0,1,0-14.81,0v3.17h2.12V59.76a5.29,5.29,0,0,1,10.58,0v3.17H41.61V78.8h19ZM58.53,76.69H43.72V65H58.53ZM53.17,35.4v2.12h2.12V35.4Z',

    bylaw: 'M65.7,35H46.32V36.9H65.7Zm0-8.7H46.32V28.2H65.7ZM30.81,74.65h1.94V72.71H30.81ZM83,36.11c-3.84-3.83-8.32-1.28-9.59,0L71.51,38V19.55H41l-16,16V80.45H71.5V57.12L82.95,45.69C84.23,44.41,86.83,40,83,36.11ZM40.44,22.86V35H28.31ZM69.58,78.51H26.94V36.9H42.38V21.49H69.56V39.9l-3.78,3.78h-35v1.93h33l-7.75,7.74H30.81v1.95H54.16L46.41,63H30.81V65H45l-.76,9.8L54.65,74,69.58,59.06ZM46.79,67,52,72.22l-5.68.44Zm7.42,4.68-6.85-6.84L74.05,38.17,80.9,45Zm28-28.1-6.71-6.7a4.9,4.9,0,0,1,6.09.61A4.72,4.72,0,0,1,82.2,43.56Zm-29.36,24,24-23.92-1.37-1.37-24,23.92Zm-14.28,7.1H40.5V72.71H38.56Zm-3.87,0h1.94V72.71H34.69Z',

    contractor: 'M68.15,69.53l1.36,1.36,1.36-1.36-1.36-1.36ZM61.7,52.18l1.12-1.12a2.93,2.93,0,0,0-.06-4.15l3.84-3.84a11.53,11.53,0,0,0,10-3.23C79.74,36.75,81.13,32.4,79,26.6l-6,6L68.6,31.53l-1.09-4.36,6-6c-3.78-1.51-9.1-1.81-13.24,2.34a11.53,11.53,0,0,0-3.23,10L48,42.58,31.73,26.29,27,20l-7,7,6.29,4.72L42.55,48,22.12,68.46a6.76,6.76,0,0,0,0,9.55,6.85,6.85,0,0,0,9.55,0l15.2-15.2a2.91,2.91,0,0,0,4.15.06l1.12-1.12L68.43,78A6.75,6.75,0,0,0,78,68.47Zm-2.53-18a10.07,10.07,0,0,1,2.51-9.33,9.4,9.4,0,0,1,8.18-2.72l-4.48,4.48L67,33.12l6.55,1.63L78,30.29a9.57,9.57,0,0,1-2.72,8.18A9.87,9.87,0,0,1,66,41L61.4,45.55l-.67-.67a2.9,2.9,0,0,0-4.09,0L53.47,48l-4.1-4.1ZM22.91,26.82l3.89-3.88,2.92,3.9-2.91,2.9ZM28.27,31,31,28.29,52.11,49.4l-2.73,2.73Zm2,45.62a4.82,4.82,0,0,1-6.82-6.82L43.92,49.39l4.1,4.1-3.17,3.17a2.88,2.88,0,0,0,0,4.09l.67.67ZM50.79,60.37,49.67,61.5a1,1,0,0,1-1.36,0L46.21,59.4a1,1,0,0,1,0-1.36L58,46.25a1,1,0,0,1,1.36,0l2.09,2.09a1,1,0,0,1,0,1.36ZM76.62,76.64a4.82,4.82,0,0,1-6.81,0L53.52,60.36l6.82-6.82L76.62,69.82A4.83,4.83,0,0,1,76.62,76.64ZM62.68,64.07,64,65.43l1.36-1.36L64,62.71Zm2.73,2.73,1.36,1.36,1.36-1.36-1.36-1.36Zm-41,7.57,1.36,1.36,3.85-3.85-1.36-1.36Z',

    voting: 'M64.44,40.88H49.5v2H64.44Zm0-4.91H49.5v2H64.44Zm.91-20.47H34.65a5.8,5.8,0,0,0-5.79,5.79V78.71a5.8,5.8,0,0,0,5.79,5.79h30.7a5.8,5.8,0,0,0,5.79-5.79V21.29A5.8,5.8,0,0,0,65.35,15.5Zm3.79,63.21a3.79,3.79,0,0,1-3.79,3.79H34.65a3.79,3.79,0,0,1-3.79-3.79V70.64H69.14Zm0-10.07H30.86V26.11H69.14Zm0-44.53H30.86V21.29a3.79,3.79,0,0,1,3.79-3.79h30.7a3.79,3.79,0,0,1,3.79,3.79ZM50,81a4.47,4.47,0,1,0-4.47-4.47A4.47,4.47,0,0,0,50,81Zm0-6.93a2.47,2.47,0,1,1-2.47,2.47A2.47,2.47,0,0,1,50,74.1Zm14.44-22H49.5v2H64.44ZM43.69,54.46l-1.07-1.07-2.48,2.48-1-1L38.11,56l2,2ZM47,49.21H34.63v12.4H47Zm-2,10.4h-8.4v-8.4H45ZM47,33H34.63v12.4H47Zm-2,10.4h-8.4V35H45ZM64.44,57.05H49.5v2H64.44ZM43.69,38.28l-1.07-1.07-2.48,2.48-1-1-1.07,1.07,2,2ZM46,21.93H54v-2H46Z',

    sun: 'M28.44,34.2l-3.86-2.58-1.29,1.93,3.86,2.58Zm12.42-9.31L37.3,16.3l-2.15.89,3.56,8.57ZM51.16,14H48.84v9.28h2.32Zm-5.23,9.57L45,19l-2.28.45L43.65,24Zm-14,6.72-6.56-6.56-1.64,1.64,6.56,6.56ZM57.26,19.47,55,19l-.91,4.56,2.28.45ZM36.12,27.15l-2.58-3.87-1.93,1.29,2.58,3.87ZM65.8,28.44l2.58-3.87-1.93-1.29-2.58,3.87Zm14.73,14.3L76,43.65l.45,2.28L81,45Zm0,14.51L81,55l-4.56-.91L76,56.35Zm-5.41-16.4L83.7,37.3l-.89-2.15L74.24,38.7Zm-3.55-6.66,1.29,1.93,3.87-2.58-1.29-1.93ZM50,27.89A22.11,22.11,0,1,0,72.11,50,22.14,22.14,0,0,0,50,27.89Zm0,41.9A19.79,19.79,0,1,1,69.79,50,19.8,19.8,0,0,1,50,69.79Zm14.85-52.6L62.7,16.3l-3.56,8.59,2.15.88ZM25.76,38.7l-8.57-3.56L16.3,37.3l8.59,3.56ZM69.7,31.93l6.56-6.56-1.64-1.64-6.56,6.56ZM19.47,42.74,19,45l4.56.91L24,43.65Zm44.4,30.11,2.58,3.87,1.93-1.29-2.58-3.87Zm-4.72,2.27L62.7,83.7l2.15-.89L61.3,74.23Zm8.91-5.41,6.56,6.56,1.64-1.64L69.7,68.07Zm-14,6.71L55,81l2.28-.45L56.35,76ZM76.72,48.84v2.32H86V48.84ZM48.84,86h2.32V76.72H48.84Zm25.4-24.7,8.57,3.56.89-2.15-8.59-3.56ZM19,55l.45,2.28L24,56.35l-.45-2.28ZM71.56,65.8l3.86,2.58,1.29-1.93-3.86-2.58ZM24.88,59.15l-8.59,3.56.89,2.15,8.59-3.56Zm-1.6-10.31H14v2.32h9.28ZM42.74,80.53,45,81l.91-4.56L43.65,76ZM28.44,65.8l-1.29-1.93-3.87,2.58,1.29,1.93Zm6.71,17,2.15.89,3.55-8.58-2.15-.89ZM30.28,68.07l-6.56,6.56,1.64,1.64,6.56-6.56Zm3.91,3.49-2.58,3.87,1.93,1.29,2.58-3.87Z',
}

const servicesIntro = 'Of course we provide all of the usual services you would expect from a strata manager. We arrange your meetings, collect your levies, manage repairs and help with disputes. But we believe it shouldn’t stop there. Our mission is to help make life in a strata scheme easier by also doing the following:'

const servicesList = [{
  icon: 'emergency',
  headline: 'After-hours emergencies',
  text: 'We know that emergencies don’t just happen during office hours. And rather than just leave you with the phone number for a message service we have our most senior staff on call to help you with emergency repairs, whenever they occur.',
  link: false,
  buttonUrl: '/emergency',
  buttonLabel: 'Emergencies'
}, {
  icon: 'contents',
  headline: 'Contents insurance',
  text: 'Many owners and residents aren’t aware that damage to their furniture and possessions is not covered by the buildings insurance. That’s why we help with arranging contents insurance too. And depending on which company the building is insured with, there can be considerable savings by reducing insurances excess amounts.',
  link: false
}, {
  icon: 'bylaw',
  headline: 'By-law registration',
  text: 'With the introduction of the Strata Schemes Management Act 2015, the need for By-laws to be adopted and amended increased greatly. For example, did you know you often need to create a By-law BEFORE you renovate your bathroom?',
  link: false
}, {
  icon: 'contractor',
  headline: 'Contractor management',
  text: 'We all know how complex the licensing, WHS & insurance laws surrounding contractors are these days, so at V J Ray we enlist the help of an independent company to continually monitor each and every contractor used by all of our strata schemes so that there is never any doubt that they comply.',
  link: false,
  buttonUrl: '/contact?form=report#contact-forms',
  buttonLabel: 'Report an issue'
}, {
  icon: 'voting',
  headline: 'Electronic voting',
  text: 'With the introduction of the Strata Schemes Management Act 2015, there is now the opportunity for strata schemes to elect to make some of the less complex decisions at a meeting by voting electronically, rather than attending the meeting in person.',
  link: false
}, {
  icon: 'service',
  headline: 'Online portal',
  text: 'We understand that its often quicker for you to help yourself, particularly if you are seeking information after hours. So we provide access to much of the commonly needed items through an online portal for each owner.',
  link: false
}, {
  icon: 'sun',
  headline: 'Coming soon…',
  text: 'We are constantly working to improve our help to strata owners and residents by taking advantage of technology as it becomes available. Things such as video meetings, an App to report repairs and maintenance items, and online contractor supervision are just a few of the things we are currently working on, so be sure to check back soon to see how they are coming along.',
  link: false
}]

export { icons, contactDetails, servicesIntro, servicesList }