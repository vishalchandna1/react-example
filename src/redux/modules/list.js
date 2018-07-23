import {arrayMove} from 'react-sortable-hoc';

const initialState = {
  list: [
    {id: Math.random(), imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG"},
    {id: Math.random(), imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Weaved_truncated_square_tiling.png"},
    {id: Math.random(), imgUrl: "http://5.imimg.com/data5/FC/KN/MY-537032/square-hole-perforated-sheet-250x250.jpg"},
    {id: Math.random(), imgUrl: "https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8.jpg"},
    {id: Math.random(), imgUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Sierpinski_square.jpg"},
    {id: Math.random(), imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Square-white.svg/2000px-Square-white.svg.png"},
    {id: Math.random(), imgUrl: "https://is2-ssl.mzstatic.com/image/thumb/Purple71/v4/6c/31/82/6c3182cd-f718-d550-181f-051f4148a2e4/mzl.qmwzcqcf.png/1200x630bb.jpg"},
    {id: Math.random(), imgUrl: "http://www.pricolproperty.com/wp-content/uploads/2015/10/Caledon-Square-Dusky-view5626086ccd4d9-1024x905.jpg"},
    {id: Math.random(), imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDVW5GsNRdqdEI7liVuh9JLsyKOMgBKZwRcd96A5S_6iFIBc8Tw"},
    {id: Math.random(), imgUrl: "http://www.bhaktigroup.in/upload/image/project/18/safal_square.jpg"},
    {id: Math.random(), imgUrl: "https://www.makemytrip.com/travel-guide/media/dg_image/singapore/Parkview-Square-Singapore.jpg"},
    {id: Math.random(), imgUrl: "http://jmdgroup.in/wp-content/uploads/2016/07/IMG_20160822_180726-515x400.jpg"},
    {id: Math.random(), imgUrl: "http://e4336fa0c208189c0eee-e6761b7f2db36d2d2df00f6c169a70d2.r66.cf1.rackcdn.com/lps/assets/u/who1299ex-178939-W-Union-Square---Exterior.jpg"},
    {id: Math.random(), imgUrl: "https://static.wixstatic.com/media/871b06_91f267016e8b4422b10fa7aedf205529.jpg"},
    {id: Math.random(), imgUrl: "https://i.pinimg.com/originals/75/be/a9/75bea96bc04e2493167be9810ef3bc8c.jpg"},
  ]
}

export default (state = initialState , action) => {
 switch (action.type) {
  case 'REORDER_LIST':
   return {
    ...state,
    list: arrayMove(state.list, action.payload.oldIndex, action.payload.newIndex)
   }
  default:
   return state
 }
}

export function orderList(oldIndex, newIndex) {
  return {
    type: 'REORDER_LIST',
    payload: {oldIndex, newIndex},
  }
}
