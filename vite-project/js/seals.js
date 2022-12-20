const seals = [
  {
    names: "snorber",
    age: 5,
    weight: 350,
    gender: "male",
    hostile: "no",
    species: "grayseal",
    value: 1500,
    stock: 1,
    img: "https://th.bing.com/th/id/R.89b1c15b04361862d895244592a7035a?rik=OdoWqBccyy24Lw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-k-e8BTTeTJI%2fUEz70Mbd-GI%2fAAAAAAAAAhU%2fDkSInq3KgmU%2fs1600%2ffb0.jpg&ehk=WxZzZnkM65sAxLfKTOVMCW2lBUu7POl%2f%2bfVKf6x%2bjb8%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    names: "blobbers",
    age: 7,
    weight: 275,
    gender: "male",
    hostile: "no",
    species: "ringedseal",
    value: 1700,
    stock: 1,
    img: "https://th.bing.com/th/id/R.c08e9ee48062ca89066c987daa219933?rik=jhQGCl3W6xbPPw&riu=http%3a%2f%2falaska-native-news.com%2fwp-content%2fuploads%2fanimals%2fimage02-12-2014-14.05.20.jpg&ehk=1LSBH24nvKxrVnL5uPDOmCakMEMbeEklyo9sUxV1dz0%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    names: "floofer",
    age: 6,
    weight: 225,
    gender: "female",
    hostile: "no",
    species: "harpseal",
    value: 1600,
    stock: 1,
    img: "https://visitgreenland.com/wp-content/uploads/2017/07/a-baby-harp-seal-in-greenland.jpg",
  },
  {
    names: "chonker",
    age: 14,
    weight: 820,
    gender: "male",
    hostile: "yes",
    species: "leopardseal",
    value: 3950,
    stock: 1,
    img: "https://s3.amazonaws.com/Photo_of_the_Day/system/uploads/photo/image/353/sized_373SealLeopard_1900.jpg",
  },
  {
    names: "bubba",
    age: 16,
    weight: 9001,
    gender: "male",
    hostile: "yes",
    species: "elephantseal",
    value: 7800,
    stock: 1,
    img: "https://th.bing.com/th/id/OIP.p2krRosyOiyXebCEVJ6uPQHaE8?pid=ImgDet&rs=1",
  },
  {
    names: "tusky",
    age: 17,
    weight: 3500,
    gender: "female",
    hostile: "yes",
    species: "walrus",
    value: 5400,
    stock: 1,
    img: "https://cdn01.dailycaller.com/wp-content/uploads/2017/10/shutterstock_375069184-e1555346494731.jpg",
  },
  {
    names: "snoofer",
    age: 10,
    weight: 250,
    gender: "male",
    hostile: "no",
    species: "ribbonseal",
    value: 2200,
    stock: 1,
    img: "https://th.bing.com/th/id/OIP.YWevt7tboTlrVQP1LUFPQAHaEz?pid=ImgDet&rs=1",
  },
  {
    names: "flopper",
    age: 9,
    weight: 660,
    gender: "female",
    hostile: "no",
    species: "grayseal",
    value: 2600,
    stock: 1,
    img: "https://th.bing.com/th/id/R.0d3f57021e69ef571cdf55934908890d?rik=YK5AAIlVBNDv8Q&riu=http%3a%2f%2fplanetfauna.com%2fwp-content%2fuploads%2f2016%2f12%2f8326295447_6e59118a41_h.jpg&ehk=AEQLdTG2x4AN8Mem%2fbWGCHB3xEtJRxx1unMtlldUNJQ%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    names: "borker",
    age: 13,
    weight: 450,
    gender: "male",
    hostile: "no",
    species: "furseal",
    value: 2650,
    stock: 1,
    img: "https://th.bing.com/th/id/R.d91abd889b99e0c1c8715d3dc93dba7e?rik=WVS05ZqasDOAIQ&riu=http%3a%2f%2felelur.com%2fdata_images%2fmammals%2ffur-seal%2ffur-seal-05.jpg&ehk=SMZTkLZgEV8lFik9ouYP8VIbAxNZo4L9RfbxeU09nUA%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    names: "skeeter",
    age: 18,
    weight: 600,
    gender: "male",
    hostile: "no",
    species: "sealion",
    value: 3200,
    stock: 1,
    img: "https://th.bing.com/th/id/OIP.Z4ts4N68IhET6N8GcVgTbAHaE7?pid=ImgDet&rs=1",
  },
  {
    names: "honker",
    age: 19,
    weight: 1050,
    gender: "male",
    hostile: "yes",
    species: "leopardseal",
    value: 4250,
    stock: 1,
    img: "https://th.bing.com/th/id/R.ca1cabdf468996e41c437d27d6bb4f95?rik=kTHqHy8wBDe%2bQA&pid=ImgRaw&r=0",
  },
  {
    names: "skipper",
    age: 7,
    weight: 200,
    gender: "male",
    hostile: "no",
    species: "harborseal",
    value: 1450,
    stock: 1,
    img: "https://th.bing.com/th/id/R.2201aa56875a8aae86141dbb78d1bdc2?rik=aBQDJ6CQ0UVL6Q&pid=ImgRaw&r=0",
  },
  {
    names:
      "Lord Chonkieur Snorfington IV, the Supreme Chonk - Heir of the Chonkiest",
    age: 3,
    weight: 400,
    gender: "male",
    hostile: "no",
    species: "rareseal",
    value: 9001,
    stock: 1,
    img: "http://i.imgur.com/MgBRINH.jpg",
  },
];
export { seals };
