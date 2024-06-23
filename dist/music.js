
var initialized = false;
if(!initialized)
{
	initialized = true;
	const ap = new APlayer({
		container: document.getElementById('aplayer'),
		fixed: true,
		autoplay: true,
		theme: '#b7daff',
		loop: 'all', // one /none
		order: 'random',	// list/ random
		preload: 'auto',
		volume: 0.5,
		mutex: true,
		listFolded: false,
		listMaxHeight: '300px',
		// lrcType: 1,
		// 3是使用audio.lrc   1是JS  2是HTML
		audio: [
		  {
			name: '老教室',
			artist: '831',
			url: '/music/老教室.flac',
			cover: '/music/cover/831_大逃杀.jpg',
			// lrc: '/music/lyrics/老教室.lrc',
		  },
		  {
			name: "烟花易冷",
			artist: '剪影姐',
			url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBbjZ0VWo3eEt0YlBpVzVmdDlhNHpramstb3RTP2U9NDZndFN2.mp3',
			cover: '/music/cover/敢归云间宿.png',
			// lrc: '/music/lyrics/敢归云间宿.lrc',
		  },
		  // {
			// name: "烟花易冷",
			// artist: '剪影姐',
			// url: 'https://public.dm.files.1drv.com/y4m0iQIJ6hgOaPniQlD09OvlAwiCY-IXV9XSzAEVYR2xEVzhv_0ntpX_Kq6Fjku6q0lTICcb8a8hMPWkqPAQoW4prDweBmp8awreaJaV5j3COgpEJCoSLfjTPRIXg054ukV4xxNfgjRZ-66WVumj7LV6KjpmDwQjMMC6sJOghhzgixAwVpaPL3wClxdQQtj83vr3GfgLzqDLkcNdAAn9qh086f11IyWneLU5CAxJwUG2u0?AVOverride=1',
			// cover: '/music/cover/敢归云间宿.png',
			// // lrc: '/music/lyrics/敢归云间宿.lrc',
		  // },
		  {
			name: "敢归云间宿",
			artist: '三无',
			url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBbjZ0VWo3eEt0YlBwam56RmUxUWtBSHcyLXNtP2U9dWdWRDRp.mp3',
			// cover: '/music/cover/敢归云间宿.png',
			// lrc: '/music/lyrics/敢归云间宿.lrc',
		  },
		  // 不支持wma后缀音乐
		  // onedrive 分享后  用https://onedrive.gimhoy.com/       这个OneDrive直链获取工具
		]
	});
}
// const colorThief = new ColorThief();
// const image = new Image();
// const xhr = new XMLHttpRequest();
// const setTheme = (index) => {
    // if (!ap.list.audios[index].theme) {
        // xhr.onload = function(){
            // let coverUrl = URL.createObjectURL(this.response);
            // image.onload = function(){
                // let color = colorThief.getColor(image);
				// window.alert(color);
                // ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
                // URL.revokeObjectURL(coverUrl)
            // };
            // image.src = coverUrl;
        // }
        // xhr.open('GET', ap.list.audios[index].cover, true);
        // xhr.responseType = 'blob';
        // xhr.send();
    // }
// };
// setTheme(ap.list.index);
// ap.on('listswitch', (index) => {
    // setTheme(index);
// });