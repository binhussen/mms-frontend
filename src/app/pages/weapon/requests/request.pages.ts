const requestPages = {
  type: 'tabbed page',
  title: 'Requests',
  tabs: [
    {
      title: 'requestForWeapon.tabs.individual',
      route: 'request-weapon-for-individual',
    },
    {
      title: 'requestForWeapon.tabs.requestForWeapon',
      route: 'request-for-weapon',
    },{
      title: 'requestForWeapon.tabs.requestForReturnWeapon',
      route: 'request-for-return-weapon',
    },
  ],
};

export default requestPages;
