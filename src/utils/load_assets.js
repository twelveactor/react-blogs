const getAssetUrl = (image) => {
  // console.log(new URL(image, import.meta.url)) // URL {origin: 'http://127.0.0.1:5173', protocol: 'http:', username: '', password: '', host: '127.0.0.1:5173', …}
  return new URL(`../assets/img/${image}`, import.meta.url).href
}

export default getAssetUrl