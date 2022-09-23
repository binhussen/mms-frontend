const requestPages = {
  type: 'tabbed page',
  title: 'Requests',
  tabs: [
    {
      title: 'requestForWeapon.tabs.individual',
      route: 'request-for-weapon/individual',
    },
    {
      title: 'requestForWeapon.tabs.requestForWeapon',
      route: 'request-for-weapon/mass',
    },
    {
      title: 'requestForWeapon.tabs.requestForReturnWeapon',
      route: 'request-for-return-weapon',
    },
  ],
};

export default requestPages;
