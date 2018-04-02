import axios from 'axios';

export let links = [`parrot`, `office`, `schwarzeneger`, `stallion`, `hendrix`, `ylvis`, `casualties`, `dropkick murphiess`]

export const gifData = () => { this.props.data.map(gif => {
    <GifCard gif={gif.images.fixed_height.url} still={gif.images.fixed_height_still.url} rating={gif.rating} />
  });