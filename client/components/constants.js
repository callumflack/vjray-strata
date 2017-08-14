const contactDetails = {
    phone: '1300 073 405',
    emergencyAfterHours: '0418 245 545',
    emergencyBusinessHours: '9784 7900'
}

const icons = {
    emergency: 'M29.65,61.67c-.77.79-7.52,7.8-7.52,12.08a8.26,8.26,0,0,0,16.52,0c0-4.3-6.75-11.3-7.52-12.08A1.07,1.07,0,0,0,29.65,61.67Zm.73,18.27a6.21,6.21,0,0,1-6.2-6.2c0-2.6,4-7.43,6.2-9.85,2.23,2.42,6.2,7.26,6.2,9.85A6.21,6.21,0,0,1,30.38,79.93ZM76.83,28.32H64.45v-1a1,1,0,0,0-1-1V24.6l8.11,1.6a3.53,3.53,0,0,0,.63.06,3.93,3.93,0,0,0,3.65-4.13c0-2.52-2-4.51-4.28-4.07l-8.11,1.6V19a1,1,0,0,0-1-1H58.25a1,1,0,0,0-1,1v.63l-8.1-1.6c-2.27-.44-4.28,1.56-4.28,4.07a3.92,3.92,0,0,0,3.65,4.13,2.59,2.59,0,0,0,.63-.08l8.1-1.6v1.66a1,1,0,0,0-1,1v1H37.62A13.44,13.44,0,0,0,24.2,41.75V53.09h-1a1,1,0,0,0-1,1v4.13a1,1,0,0,0,1,1H39.68a1,1,0,0,0,1-1V54.12a1,1,0,0,0-1-1h-1V43.81a1,1,0,0,1,1-1h16.5v1a1,1,0,0,0,1,1h6.2a1,1,0,0,0,1-1v-1H76.83a1,1,0,0,0,1-1V29.35A1,1,0,0,0,76.83,28.32ZM63.42,21.77l8.5-1.68c1-.2,1.83.82,1.83,2s-.87,2.23-1.83,2l-8.5-1.68ZM38.65,57.23H24.2V55.17H38.65ZM56.19,40.72H39.68a3.1,3.1,0,0,0-3.1,3.1v9.27H26.26V41.75A11.36,11.36,0,0,1,37.62,30.4H56.19Zm1-18.21-8.49,1.67c-1,.19-1.83-.82-1.83-2a1.9,1.9,0,0,1,1.59-2.07h.24l8.49,1.67Zm2.07.84V20.07h2.07v6.19H59.29Zm3.1,6V42.77H58.25v-1s0,0,0-.06V29.36s0,0,0-.06v-1h4.13ZM75.8,40.72H64.45V30.4H75.8Z',
    service: 'M49,35.77A24.81,24.81,0,0,0,25.22,60.52v1H74.77v-1A24.79,24.79,0,0,0,51,35.77V32.65h3.1V30.58H45.87v2.07H49ZM72.69,59.5H27.31a22.71,22.71,0,0,1,45.38,0ZM33.82,53.69a17.47,17.47,0,0,1,3.77-5.58,17.67,17.67,0,0,1,5.58-3.77l-.81-1.9a19.54,19.54,0,0,0-6.24,4.21,19.75,19.75,0,0,0-4.21,6.24Zm-1.25-19-4.12-4.64-1.54,1.37L31,36.08Zm45.29,35.1v-6.2H22.13v6.2H18v2.07H82V69.81Zm-2.05,0H24.2V65.68H75.81ZM36.18,28.24l-2.06-.12-.37,6.19,2.06.12Zm-5.7,9-6.19-.37-.11,2.05,6.17.37Z',
    lockin: 'M48.95,37.51h2.12V35.4H48.95Zm-4.24,0h2.12V35.4H44.71Zm9.52,24.33H52.12V58.68a5.29,5.29,0,0,1,10.58,0v4.24h2.12V58.68a7.41,7.41,0,0,0-14.81,0v3.17H35.19V77.71h19ZM52.12,75.59H37.31V64H52.12Zm-6.35-7.41H43.65v4.24h2.12ZM74.33,80.88V48.09h7.91L50,17,37.31,29.24V20.59H28.85V37.4L17.75,48.09h7.91V80.88H17.21V83H82.79V80.88ZM31,22.7h4.24v8.57L31,35.36ZM23,46l27-26L77,46ZM72.22,80.88H27.78V48.09H72.22Zm-19-45.49v2.12h2.12V35.4Z',
    experience: 'M67.76,53.19l-4.17,9L51,37.17v-5H70.52l-3.67-7.34,3.67-7.33H48.91V37.19L36.1,65.49,29.9,54.79,18,82.5H82ZM51,19.6H67.13l-2.62,5.25,2.62,5.25H51ZM50,39.85l4.3,8.56-1.5.42L50,46.53,47.29,48.8l-1.15-.4ZM21.15,80.39l9-20.95L35,67.84,29.36,80.39ZM45.28,50.33l2.44.87,2.33-1.92,2.29,1.89,2.93-.84,7.19,14.32L56.35,77.88l1.91.87,9.56-20.66L78.69,80.41h-47ZM24.79,40.57H35.29a5.25,5.25,0,0,0,5.25-5.25,5.16,5.16,0,0,0-2.2-4.25A5.24,5.24,0,0,0,29.94,26a6.14,6.14,0,0,0-.95-.08,6.26,6.26,0,0,0-6,4.53,5.24,5.24,0,0,0,1.83,10.15Zm-.72-8.3.67-.15.13-.68A4.19,4.19,0,0,1,29,28a3.75,3.75,0,0,1,1,.14l.58.14.42-.41a3.13,3.13,0,0,1,5.14,3.34l-.35.9.87.42a3.13,3.13,0,0,1-1.36,6H24.79a3.14,3.14,0,0,1-.72-6.21Z',
}

export { icons, contactDetails }