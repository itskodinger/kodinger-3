import {tns} from "tiny-slider/src/tiny-slider";
import 'tiny-slider/dist/tiny-slider.css';
// needs better solution; error when using dynamic import
window.tns = tns;
import { post, types } from './libs/post';
import hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night-bright.css';
window.hljs = hljs;

import { commentLoad, comment } from './libs/comment';

commentLoad({
    route: routes.comment_ajax + post_id
}, function(res) {
    let hash = window.location.hash;
    setTimeout(function() {
        if(hash)
            window.scrollTo(0, document.querySelector(hash).offsetTop - 80);                
    }, 50);
});

const message = $('.comment-message');
if(message) {
    message.addEventListener('keydown', function(event) {
        if(event.keyCode == 13 && !event.shiftKey) {
            event.preventDefault(); 
            comment(this.value); 
            this.value = ''; 
            return false;
        } 
    });

    message.addEventListener('keyup', function(event) {
        if(event.shiftKey && event.keyCode == 13 || event.keyCode == 8) {
            this.style.height=80 + 'px';
            this.style.height=(this.scrollHeight) + 'px';
        } 
    });
}

const type = post_type == 'markdown' ? types.MARKDOWN : types.POST;

let mypost = post.init('.post', {
    url: routes.post_show.replace(/slug/g, post_data.slug),
    type,
    carousel: type !== 'markdown' ? true : false,
    lazyimage: false,
    first: true,
    syntax: true
});


mypost.onRender.then(function({lastData: {data}}) {
	$('#comment-box').classList.remove('hidden');
    $('#author-box').classList.remove('hidden');

    if(window.outerWidth < 640)
        $('#links-info-alert').classList.remove('hidden');

	/**
	 * Links
	 */

    if(post_type !== 'markdown') {
        let link_tpl = function({originalName, name, links}) {
        	return `
                <div class="mb-12">
                	<h2 class="pb-3 font-semibold">${name}</h2>
                	<div class="bg-white rounded border border-gray-200">
                	${ links.length > 0 ?
                		links.map(function(page) {
                		return `
                    		<a data-fetch="${page}" target="_blank" class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="${ page }">
    	                		<img class="w-8 flex-shrink-0" src="https://s2.googleusercontent.com/s2/favicons?domain_url=${ page }">
    	                		<div class="ml-4 overflow-hidden">
    	                			<div class="text-indigo-600 font-semibold title truncate"></div>
    		                		<span class="text-sm text-gray-700 truncate">${page}</span>
    	                		</div>
    	                	</a>`;
    	                }).join('')
    	            : // else
    	            `
    	            <div class="px-5 py-4 border-b border-gray-100 text-center">
                    	<h4>Tidak ada link ${name}</h4>
                	</div>
    	            `
                	}
                    	<div class="flex items-center justify-center px-2 py-2 border-b border-gray-100">
    	                	<a href="${routes.contribute_create.replace(/slug/g, post_data.slug)}?col=${originalName}" class="inline-block bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 text-white rounded py-1 px-4">Rekomendasikan</a>
                    	</div>
                    </div>
                </div>
            `;
        }

        const el = $('.links');
        const link_names = ['pages', 'tutorials', 'helps', 'examples'];

        el.innerHTML = '';

        link_names.forEach(function(name) {
        	el.insertAdjacentHTML('beforeEnd', link_tpl({name: key2str[name], links: data[name], originalName: name}));
        });

        setTimeout(function() {
            $$('[data-fetch]').forEach(function(item) {
                let url = item.dataset.fetch;

                if(url) {
                    (async function() {
                        const res = await fetch(routes.post_link_info, {
                            method: 'POST',
                            headers: {
                                'X-CSRF-TOKEN': token,
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            body: JSON.stringify({
                                url
                            })
                        });

                        if(res.ok) {
                            return Promise.resolve(res.json());
                        }
                    })()
                    .then(function(data) {
                        if(data) {
                            const { title } = data;

                            item.querySelector('.title').innerText = title;
                        }
                    });
                }
            });
        }, 500);

        /**
         * Inspiration
         */
        let inspi_tpl = function({keyword}) {
        	return `<div class="mb-12">
                    	<h2 class="pb-3 font-bold text-indigo-600">Cari Inspirasi Desain</h2>
                    	<div class="flex flex-wrap border border-gray-200 bg-white rounded">
    	                	<a href="https://dribbble.com/search/${keyword}" class="flex items-center w-1/3 border-r hover:bg-gray-100 rounded p-4">
    							<svg class="h-4" viewBox="0 0 512 126" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"> <g> <path d="M156.433566,50.3217928 C162.293279,50.3217928 167.043422,45.5700082 167.043422,39.7086531 C167.043422,33.847298 162.293279,29.0955133 156.433566,29.0955133 C150.573305,29.0955133 145.823161,33.847298 145.823161,39.7086531 C145.823161,45.5700082 150.573305,50.3217928 156.433566,50.3217928 L156.433566,50.3217928 Z M506.593862,86.5830801 C504.979842,85.4477947 503.73349,85.2601307 502.69997,87.4644992 C484.879547,126.059824 454.849472,106.80046 457.833494,108.495455 C464.494199,105.447966 482.01261,91.3977841 479.365069,71.9983566 C477.756521,60.1421478 467.581081,54.8831778 456.77973,56.7663837 C437.926334,60.0529663 430.989877,80.3885256 434.521025,98.3933303 C435.139277,101.484589 436.243376,104.035288 437.345834,106.532916 C416.040221,123.858738 407.579473,91.0224561 406.619268,87.0990194 C406.580969,86.8894703 423.070236,73.1451315 427.656242,40.3936542 C432.462739,6.06864392 421.513117,-0.180623125 410.3151,0.0141535402 C389.595459,0.375256346 383.997271,43.6660115 391.518605,79.7456531 C390.889411,79.9097908 387.956818,81.5336592 383.246068,81.7153048 C379.855531,71.0490939 365.371479,61.6992668 361.5799,65.3015409 C352.09165,74.3154329 363.881109,91.9356085 372.175531,93.3181945 C367.19286,124.009197 336.030235,116.407436 341.831406,77.9565529 C351.979489,59.1124576 359.697241,31.091427 358.319579,14.1754019 C357.83209,8.18601947 353.404204,0.161877415 343.389072,0.558543377 C324.128614,1.32123627 322.034765,44.6240282 324.293299,75.3577069 C324.180591,74.6010324 323.10932,79.0918382 315.216488,81.3252044 C313.349149,70.9615538 296.662916,60.5596045 292.734555,65.5608784 C285.382283,74.9211008 298.124288,91.6095217 304.160724,92.7743518 C299.178052,123.464808 268.015974,115.863046 273.817145,77.412163 C283.964681,58.5680678 291.682433,30.5470372 290.304771,13.6310121 C289.817282,7.64162963 285.389943,-0.382512421 275.374264,0.0141535402 C256.113807,0.777393562 254.019957,44.0796384 256.278491,74.8133171 C256.164689,74.0451529 255.06825,78.6831355 246.853161,80.8803914 C246.577957,67.4353302 229.830994,61.2708676 225.80798,65.5608784 C218.638448,73.2069567 227.449904,88.8974208 235.602073,92.7743518 C230.619401,123.464808 199.457323,115.863046 205.258495,77.412163 C215.406031,58.5680678 223.123783,30.5470372 221.746121,13.6310121 C221.258632,7.64162963 216.831293,-0.382512421 206.815614,0.0141535402 C187.555156,0.777393562 186.005697,46.2566506 188.264231,76.9903293 C181.920311,104.170975 160.645337,138.115186 163.408868,70.1178864 C163.681884,65.3485937 163.980067,63.5365141 161.60226,61.7512438 C159.819725,60.3626393 155.767714,61.0301324 153.553497,61.0859392 C150.861093,61.1937229 150.18594,62.7694442 149.591214,65.1499871 C148.204799,71.298036 147.956404,77.2578737 147.758344,85.3897994 C147.628128,89.1939628 147.322832,90.9688378 145.858725,96.1555872 C144.394617,101.342337 136.048765,110.820738 131.478079,109.23681 C125.138536,107.055421 127.217066,89.1583996 128.405969,76.8612077 C129.396266,67.1426181 126.226769,62.7792925 118.104144,61.1920815 C113.349077,60.2006902 110.459707,60.3533382 105.508222,58.7923892 C100.825375,57.3162447 99.7655927,48.4577364 89.7789116,51.4100254 C84.3147696,53.0256869 87.826768,64.6012203 86.514214,73.1806947 C80.0592278,115.381029 66.6278447,116.539841 60.3966328,96.0395966 C88.4597921,27.3102429 68.5148805,0.21440146 56.8414116,0.21440146 C44.681001,0.21440146 30.7807315,8.58979806 36.6667072,62.1818315 C33.8046939,61.346918 32.9249162,60.8971809 29.7920758,60.8971809 C12.0728705,60.8971809 0,75.2214727 0,92.8914367 C0,110.561401 12.0728705,124.885692 29.7920758,124.885692 C40.2525675,124.885692 47.5955384,120.128984 53.1581629,112.769599 C56.786699,117.966744 61.2058314,124.96612 69.2868745,124.650976 C93.3735259,123.713203 100.379467,74.3039433 101.205627,71.5480723 C103.780946,71.9447383 106.217296,72.6959415 108.594556,73.0926075 C112.556839,73.68788 112.84408,75.2559416 112.754898,79.2412035 C111.705512,112.844555 117.906085,124.610488 131.971586,124.610488 C139.808611,124.610488 146.794309,116.911339 151.606278,111.405068 C155.200345,118.822995 160.927107,124.383978 168.609843,124.610488 C187.227428,125.072809 194.354831,95.400554 193.705393,99.3053885 C193.195473,102.369291 199.745111,124.443068 218.910916,124.523495 C242.652332,124.622525 247.064899,98.5147922 247.59178,94.1416183 C247.657435,93.2711417 247.685886,93.3625117 247.59178,94.1416183 C247.585762,94.2225929 247.579197,94.3090387 247.572631,94.4069742 C255.109831,93.0052388 258.999346,88.9641701 258.999346,88.9641701 C258.999346,88.9641701 265.051101,124.929462 287.469567,124.523495 C310.748114,124.101662 315.138249,100.502499 315.715466,95.9000796 C315.790969,94.8080172 315.836381,94.9360445 315.715466,95.9000796 C315.712183,95.945491 315.709448,95.9854312 315.706165,96.0352196 C324.659326,92.7776346 327.013607,89.5085599 327.013607,89.5085599 C327.013607,89.5085599 331.824481,124.758759 355.483828,125.067338 C376.568402,125.342542 384.3819,103.752424 384.427859,94.7150058 C387.984174,94.7527575 394.561717,92.6058372 394.407427,92.4827339 C394.407427,92.4827339 402.13065,123.302858 423.697242,124.885692 C433.823987,125.628689 441.41973,119.188475 445.749681,116.249864 C455.926215,124.491215 489.811336,135.016815 511.206677,98.7418492 C514.226263,93.5359505 507.733525,87.3857131 506.593862,86.5830801 L506.593862,86.5830801 Z M28.9369187,112.918964 C18.598983,112.918964 11.9700109,103.360135 11.9700109,93.0533858 C11.9700109,82.7466363 18.0545932,73.1878073 28.3925288,73.1878073 C33.0452838,73.1878073 35.632093,73.6999168 39.2557049,76.8513594 C39.9133497,79.43981 41.7746705,85.4122316 42.6812574,88.1243325 C43.8947817,91.7528686 45.3386458,94.8419389 46.7950938,98.2040249 C44.7143757,106.827269 37.8960981,112.918964 28.9369187,112.918964 L28.9369187,112.918964 Z M54.1287635,77.1544669 C53.69927,76.4694659 53.7884515,76.8902053 53.3075282,76.2429559 C51.4128327,71.0884869 47.7607702,59.5818913 47.3378423,46.5121582 C46.8596546,31.7288282 49.3239077,14.4002705 56.5880925,14.4002705 C61.5100332,14.4002705 66.7410997,49.5197069 54.1287635,77.1544669 L54.1287635,77.1544669 Z M199.690399,61.7512438 C198.523927,52.9780869 198.463197,13.8679174 207.852417,14.9446603 C213.035883,17.0445279 204.565287,53.9503289 199.690399,61.7512438 L199.690399,61.7512438 Z M268.249049,61.7512438 C267.082578,52.9780869 267.021847,13.8679174 276.411067,14.9446603 C281.594534,17.0445279 273.123937,53.9503289 268.249049,61.7512438 L268.249049,61.7512438 Z M336.263857,62.2956336 C335.096839,53.5224768 335.036655,14.4123072 344.425328,15.4890502 C349.609342,17.5889177 341.138198,54.4947187 336.263857,62.2956336 L336.263857,62.2956336 Z M411.351903,12.6554874 C419.936302,11.7658614 419.581764,49.2521625 402.351689,72.9175273 C400.13036,64.364315 396.723409,15.593004 411.351903,12.6554874 L411.351903,12.6554874 Z M447.432639,93.3181945 C444.675127,79.3911158 451.799247,70.2437252 459.143312,69.2408442 C461.709878,68.8305001 465.429784,70.4937615 466.171686,73.6025284 C467.391776,79.461695 465.994964,88.1522359 449.557674,99.1795496 C449.582295,99.2736552 448.046514,96.4193017 447.432639,93.3181945 L447.432639,93.3181945 Z" fill="#000000"></path> </g> </svg>
    						</a>
    	                	<a href="https://www.uplabs.com/search?q=${keyword}" class="flex items-center w-1/3 border-r hover:bg-gray-100 rounded p-4">
    	                		<svg class="h-4" viewBox="0 0 306 71" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a"><stop offset="0" stop-color="#6a11cb"/><stop offset="1" stop-color="#2575fc"/></linearGradient><linearGradient id="b" x1="-16.826117%" x2="219.3%" xlink:href="#a" y1="68.255184%" y2="-19.959866%"/><linearGradient id="c" x1="-104.295098%" x2="112.418627%" xlink:href="#a" y1="86.9491%" y2="21.510283%"/><g fill="none" transform=""><path d="m36.3090909 2.5875v26.0475c0 4.3125-.8636364 7.4175-2.5909091 9.315s-4.4909091 2.9325-8.2909091 2.9325-6.5636363-.8625-8.2909091-2.76c-1.7272727-1.8975-2.5909091-5.0025-2.5909091-9.4875v-26.0475h-14.33636359v26.0475c0 7.7625 1.55454545 13.455 4.66363636 17.595.51818182.5175.86363637 1.2075 1.38181818 1.725 4.14545455 4.14 10.53636365 6.21 19.17272725 6.21 8.4636364 0 14.8545455-2.07 19-6.21.5181818-.5175.8636364-1.035 1.3818182-1.725 3.1090909-4.14 4.6636364-10.005 4.6636364-17.595v-26.0475z" fill="url(#b)"/><path d="m59.4545455 67.7925v-65.3775h13.8181818v8.1075c1.9-3.2775 4.1454545-5.6925 6.9090909-7.4175 2.7636363-1.5525 5.8727273-2.415 9.5-2.415 7.0818182 0 12.6090908 2.415 16.5818178 7.0725 3.972728 4.6575 6.045455 11.2125 6.045455 19.4925 0 8.1075-2.072727 14.49-6.045455 19.32-3.972727 4.83-9.3272724 7.245-15.8909087 7.245-3.9727273 0-7.2545455-.69-10.0181818-2.2425-2.7636364-1.38-5.1818182-3.795-7.0818182-6.9.1727272 1.2075.3454545 2.5875.3454545 4.14 0 1.38.1727273 3.105.1727273 5.0025v13.8h-14.3363636zm13.1272727-40.5375c0 4.485 1.0363636 7.935 3.2818182 10.5225 2.2454545 2.415 5.3545454 3.795 9.1545454 3.795 3.9727273 0 7.0818182-1.2075 9.1545455-3.795 2.2454545-2.415 3.2818182-6.0375 3.2818182-10.5225s-1.0363637-7.935-3.2818182-10.5225c-2.2454546-2.5875-5.3545455-3.795-9.3272728-3.795-3.8 0-6.9090909 1.38-9.1545454 3.9675-2.0727273 2.2425-3.1090909 5.865-3.1090909 10.35z" fill="url(#c)"/><g fill="#3a3a3a"><path d="m124 68v-65h14v65z"/><path d="m46 68c-.5189873-.5217391-.8649789-1.2173913-1.3839662-1.7391304-4.1518988-4.1739131-10.5527427-6.2608696-19.2025317-6.2608696-8.4767932 0-14.8776371 2.0869565-19.02953586 6.2608696-.51898734.5217391-.8649789 1.0434782-1.38396624 1.7391304z"/><path d="m198 67.9350649h-14.029412l.173203-7.0551948c-1.905229 3.0974026-4.330066 5.3344156-7.101307 6.8831169-2.771242 1.3766234-6.062092 2.237013-10.045752 2.237013-6.581699 0-11.95098-2.4090909-15.93464-7.2272727-3.983661-4.8181818-6.062092-11.3571429-6.062092-19.2727273 0-8.2597403 1.905229-14.7987013 5.888889-19.4448052s9.526144-7.0551948 16.627451-7.0551948c3.637255 0 6.928104.8603896 9.699346 2.4090909 2.771242 1.7207792 5.196079 4.1298701 7.101307 7.3993507v-8.0876624h13.683007zm-13.163399-24.7792207c0-4.474026-1.039215-7.9155845-3.290849-10.4967533s-5.196079-3.9577922-9.179739-3.9577922-6.928105 1.2045455-9.179738 3.7857143c-2.251634 2.5811688-3.29085 6.0227273-3.29085 10.4967532 0 4.474026 1.039216 7.9155844 3.29085 10.4967533 2.251633 2.4090909 5.196078 3.7857143 9.179738 3.7857143s7.101307-1.2045455 9.352941-3.7857143c1.905229-2.4090909 3.117647-5.8506494 3.117647-10.3246753z"/><path d="m206 67.9170984v-64.9170984h13.901639v14.5803109c0 1.5621761 0 3.1243523-.17377 4.6865285-.173771 1.5621761-.347541 3.1243523-.521312 4.5129533 2.432787-3.6450777 4.865574-6.2487046 7.645902-7.8108808 2.780328-1.5621761 5.908197-2.4300518 9.557377-2.4300518 7.12459 0 12.685246 2.4300518 16.681967 7.1165803 3.996722 4.6865285 5.908197 11.2823834 5.908197 19.6139897 0 8.158031-2.085246 14.5803108-6.081967 19.4404145-3.996722 4.8601036-9.383607 7.2901554-15.986885 7.2901554-3.996722 0-7.298361-.6943005-10.078689-2.2564767-2.780328-1.388601-5.213115-3.8186528-7.12459-6.9430052l.17377 7.1165803zm13.206557-24.9948186c0 4.5129534 1.042623 7.984456 3.30164 10.5880829 2.259016 2.4300518 5.386885 3.8186528 9.209836 3.8186528 3.996721 0 7.12459-1.2150259 9.209836-3.8186528 2.259016-2.4300518 3.301639-6.0751295 3.301639-10.5880829s-1.042623-7.984456-3.301639-10.5880829c-2.259017-2.603627-5.386885-3.8186529-9.383607-3.8186529-3.822951 0-6.950819 1.3886011-9.209836 3.992228-1.911475 2.2564767-3.127869 5.9015544-3.127869 10.4145078z"/><path d="m264 59.8874598 11.153527-5.7299035c.348548 1.9099678 1.394191 3.4726688 2.962656 4.5144694 1.568464 1.0418007 3.659751 1.7363344 6.099585 1.7363344s4.182572-.3472669 5.576763-1.2154341 2.091286-2.0836012 2.091286-3.6463022c0-2.4308682-2.439834-4.340836-7.319502-6.0771704-1.568464-.5209003-2.614108-.8681672-3.485477-1.2154341-5.925311-2.2572347-9.93361-4.340836-12.19917-6.5980707-2.26556-2.2572348-3.311203-5.0353698-3.311203-8.3344052 0-4.8617363 1.917012-8.8553055 5.751037-11.8070739 3.834025-2.9517685 8.887967-4.5144695 15.161826-4.5144695 4.53112 0 8.365145.8681672 11.676348 2.778135 3.311204 1.7363345 5.751038 4.3408361 7.145229 7.6398714l-10.630706 5.2090032c-.522821-1.9099678-1.568465-3.2990353-2.962655-4.1672025-1.394191-1.0418007-3.13693-1.3890676-5.40249-1.3890676-2.091286 0-3.834025.5209004-5.228216 1.3890676s-1.917012 2.0836013-1.917012 3.4726688c0 2.4308682 3.311203 4.8617363 9.93361 6.9453376.697095.1736334 1.394191.3472669 1.742738.5209003 5.40249 1.7363344 9.410789 3.8199357 11.676349 6.2508039s3.485477 5.3826366 3.485477 9.2025723c0 4.8617364-1.917012 8.8553055-5.751037 11.807074s-9.062241 4.340836-15.510374 4.340836c-5.228216 0-9.585062-1.0418006-13.244813-2.9517685-3.834025-2.2572347-6.273859-4.8617363-7.493776-8.1607717z"/></g></g></svg>
    						</a>
    	                	<a href="https://www.behance.net/search?search=${keyword}" class="flex items-center w-1/3 hover:bg-gray-100 rounded p-4">
    							<svg class="h-4" viewBox="0 0 512 95" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"> <g fill="#0A0B09"> <path d="M42.3830069,77.1622621 C44.4027586,77.1622621 46.3201103,76.9821793 48.124469,76.5796414 C49.9535448,76.1771034 51.5778207,75.5450483 52.9478621,74.6057931 C54.3179034,73.7053793 55.4513655,72.4695172 56.2776276,70.8946759 C57.1038897,69.3374897 57.4993655,67.3142069 57.4993655,64.8672 C57.4993655,60.0755862 56.1505103,56.671669 53.4704552,54.6060138 C50.7833379,52.5686069 47.1993379,51.5552 42.7926069,51.5552 L20.5329655,51.5552 L20.5329655,77.1622621 L42.3830069,77.1622621 L42.3830069,77.1622621 Z M41.2530759,37.5793655 C44.8794483,37.5793655 47.8808276,36.7177931 50.2607448,34.969931 C52.6159448,33.2538483 53.76,30.4113655 53.76,26.5131034 C53.76,24.3521103 53.3786483,22.5618759 52.6159448,21.1741793 C51.8285241,19.7864828 50.7833379,18.6989241 49.462731,17.9397517 C48.1527172,17.1488 46.6732138,16.6014897 44.9536,16.3084138 C43.2692966,15.9764966 41.5002483,15.8493793 39.6888276,15.8493793 L20.5329655,15.8493793 L20.5329655,37.5793655 L41.2530759,37.5793655 L41.2530759,37.5793655 Z M43.9013517,0.00915862069 C48.3469241,0.00915862069 52.3617103,0.394041379 56.0304552,1.18852414 C59.6780138,1.96182069 62.7923862,3.25417931 65.4230069,5.02675862 C68.0147862,6.7958069 70.0416,9.1510069 71.4928552,12.1170759 C72.9088,15.0407724 73.622069,18.6989241 73.622069,23.0279724 C73.622069,27.7101241 72.5592276,31.6189793 70.4335448,34.7439448 C68.2937379,37.8653793 65.1475862,40.4253793 60.9456552,42.4133517 C66.6694621,44.0588138 70.9067034,46.9577931 73.7174069,51.0749793 C76.5422345,55.2204138 77.922869,60.1850483 77.922869,66.0006621 C77.922869,70.7181241 77.0189241,74.7752828 75.2180966,78.1897931 C73.3960828,81.6466759 70.9172966,84.4503172 67.8629517,86.6113103 C64.7838897,88.7934897 61.2457931,90.3930483 57.2839724,91.4347034 C53.3645241,92.4763586 49.2967724,92.9989517 45.1301517,92.9989517 L0.0600275862,92.9989517 L0.0600275862,0.00915862069 L43.9013517,0.00915862069 L43.9013517,0.00915862069 Z"></path> <path d="M128.360166,41.4776276 C126.160331,39.0447448 122.438621,37.727669 117.89771,37.727669 C114.942234,37.727669 112.495228,38.2255448 110.539034,39.2389517 C108.625214,40.2382345 107.053903,41.4846897 105.856883,42.950069 C104.663393,44.4401655 103.847724,46.0114759 103.374566,47.6922483 C102.901407,49.3306483 102.618924,50.8172138 102.530648,52.1307586 L132.622124,52.1307586 C132.180745,47.4132966 130.567062,43.9281655 128.360166,41.4776276 L128.360166,41.4776276 Z M107.1104,76.851531 C109.878731,79.5563034 113.882924,80.9192828 119.070014,80.9192828 C122.798786,80.9192828 126.022621,79.9764966 128.727393,78.0944552 C131.407448,76.2194759 133.038786,74.2103172 133.670841,72.1270069 L149.955972,72.1270069 C147.339476,80.230731 143.367062,86.0180966 137.946924,89.4996966 C132.593876,92.9989517 126.061462,94.7432828 118.452083,94.7432828 C113.148469,94.7432828 108.37451,93.8817103 104.091366,92.1938759 C99.8082207,90.4813241 96.2277517,88.0802207 93.2157793,84.9517241 C90.2814897,81.8091034 88.0039724,78.0944552 86.3796966,73.7336276 C84.7730759,69.3939862 83.9609379,64.5882483 83.9609379,59.3799724 C83.9609379,54.3447172 84.8048552,49.6413793 86.4467862,45.2946759 C88.1275586,40.9338483 90.4474483,37.1697655 93.4982621,34.0130207 C96.559669,30.8386207 100.186041,28.3351172 104.409159,26.5060414 C108.635807,24.6804966 113.293241,23.7659586 118.452083,23.7659586 C124.147641,23.7659586 129.136993,24.8605793 133.413076,27.0957241 C137.675034,29.2955586 141.167228,32.2792828 143.914372,36.0151172 C146.657986,39.7474207 148.610648,44.0129103 149.832386,48.793931 C151.04,53.5714207 151.467255,58.5607724 151.117683,63.7867034 L102.530648,63.7867034 C102.530648,69.1079724 104.331476,74.1467586 107.1104,76.851531 L107.1104,76.851531 Z"></path> <path d="M177.385048,0.00915862069 L177.385048,35.072331 L177.808772,35.072331 C180.15691,31.1705379 183.12651,28.3351172 186.7776,26.5766621 C190.421628,24.8040828 193.977379,23.9283862 197.441324,23.9283862 C202.381241,23.9283862 206.427807,24.5780966 209.588083,25.9163586 C212.75189,27.2793379 215.255393,29.1225379 217.088,31.5201103 C218.885297,33.9070897 220.156469,36.8201931 220.901517,40.2523586 C221.632441,43.6774621 222.010262,47.455669 222.010262,51.6222897 L222.010262,92.9989517 L203.426428,92.9989517 L203.426428,54.9803034 C203.426428,49.4365793 202.561324,45.2699586 200.838179,42.544 C199.111503,39.8145103 196.046566,38.444469 191.62571,38.444469 C186.625766,38.444469 183.009986,39.9592828 180.77131,42.950069 C178.490262,45.9408552 177.385048,50.8631172 177.385048,57.7133241 L177.385048,92.9989517 L158.808276,92.9989517 L158.808276,0.00915862069 L177.385048,0.00915862069"></path> <path d="M271.614234,61.7210483 C270.463117,62.1024 269.188414,62.4237241 267.874869,62.7026759 C266.518952,62.9604414 265.103007,63.1687724 263.634097,63.3523862 C262.17931,63.5289379 260.682152,63.7302069 259.230897,63.9915034 C257.846731,64.2633931 256.462566,64.6023724 255.14549,65.0437517 C253.803697,65.4816 252.627862,66.0642207 251.660359,66.7986759 C250.657545,67.5437241 249.859531,68.4759172 249.248662,69.5952552 C248.655448,70.7181241 248.337655,72.1764414 248.337655,73.8995862 C248.337655,75.5450483 248.655448,76.9327448 249.248662,78.073269 C249.859531,79.2032 250.657545,80.0859586 251.706262,80.7392 C252.751448,81.3924414 253.976717,81.8514759 255.339697,82.1057103 C256.723862,82.381131 258.153931,82.483531 259.61931,82.483531 C263.256276,82.483531 266.059917,81.8797241 268.058483,80.6685793 C270.046455,79.4503724 271.543614,77.9955862 272.479338,76.3006897 C273.432717,74.6057931 274.008276,72.8967724 274.195421,71.1736276 C274.439062,69.4398897 274.548524,68.0416 274.548524,66.9928828 L274.548524,60.0755862 C273.746979,60.7853241 272.804193,61.3326345 271.614234,61.7210483 L271.614234,61.7210483 Z M235.2128,35.5207724 C237.094841,32.6571034 239.520662,30.3372138 242.472607,28.6034759 C245.424552,26.8520828 248.722538,25.6197517 252.430124,24.8817655 C256.123586,24.1225931 259.817048,23.7659586 263.567007,23.7659586 C266.939145,23.7659586 270.350124,23.9990069 273.863503,24.4792276 C277.320386,24.9559172 280.480662,25.8916414 283.347862,27.2864 C286.211531,28.6882207 288.545545,30.6055724 290.353434,33.1090759 C292.186041,35.5490207 293.114703,38.854069 293.114703,42.950069 L293.114703,78.0414897 C293.114703,81.0923034 293.298317,83.9912828 293.623172,86.7666759 C293.9904,89.5667862 294.940248,91.6677517 295.837131,93.0448552 L276.946097,92.9989517 C276.391724,92.1938759 275.93269,90.9332966 275.717297,89.8351448 C275.498372,88.7617103 275.346538,87.6564966 275.261793,86.5230345 C272.320441,89.5667862 268.870621,91.7065931 264.852303,92.928331 C260.865766,94.1324138 256.801545,94.7432828 252.627862,94.7432828 C249.428745,94.7432828 246.448552,94.3372138 243.659034,93.5533241 C240.91189,92.7694345 238.471945,91.5547586 236.392166,89.9128276 C234.301793,88.2391172 232.695172,86.162869 231.522869,83.6487724 C230.357628,81.1205517 229.757352,78.1121103 229.757352,74.6375724 C229.757352,70.802869 230.445903,67.6461241 231.805352,65.1744 C233.12949,62.7026759 234.849103,60.7147034 236.999503,59.2422621 C239.114593,57.7592276 241.543945,56.6434207 244.294621,55.9160276 C247.020579,55.1815724 249.78891,54.5742345 252.532524,54.1469793 C255.31851,53.7197241 258.030345,53.3736828 260.738648,53.1053241 C263.454014,52.8404966 265.805683,52.4626759 267.906648,51.9330207 C269.979366,51.4174897 271.638952,50.6336 272.857159,49.6413793 C274.054179,48.6456276 274.629738,47.1979034 274.548524,45.2699586 C274.548524,43.2784552 274.195421,41.6894897 273.556303,40.5030621 C272.913655,39.3342897 272.045021,38.4338759 270.982179,37.7771034 C269.89109,37.120331 268.66229,36.6895448 267.246345,36.4600276 C265.805683,36.2516966 264.280276,36.1351724 262.652469,36.1351724 C259.033159,36.1351724 256.16949,36.9402483 254.139145,38.4868414 C252.052303,40.0793379 250.851752,42.6993655 250.480993,46.3575172 L231.928938,46.3575172 C232.197297,41.9896276 233.270731,38.3844414 235.2128,35.5207724 L235.2128,35.5207724 Z"></path> <path d="M320.850979,25.6868414 L320.850979,35.072331 L321.26411,35.072331 C323.605186,31.1705379 326.624221,28.3351172 330.374179,26.5766621 C334.092359,24.8040828 337.944717,23.9283862 341.850041,23.9283862 C346.811145,23.9283862 350.882428,24.5780966 354.028579,25.9163586 C357.231228,27.2793379 359.720607,29.1225379 361.524966,31.5201103 C363.375228,33.9070897 364.6464,36.8201931 365.387917,40.2523586 C366.136497,43.6774621 366.507255,47.455669 366.507255,51.6222897 L366.507255,92.9989517 L347.916359,92.9989517 L347.916359,54.9803034 C347.916359,49.4365793 347.044193,45.2699586 345.310455,42.544 C343.552,39.8145103 340.518841,38.0631172 336.066207,38.0631172 C331.034483,38.0631172 327.369269,39.9592828 325.116469,42.950069 C322.849545,45.9408552 321.726676,50.8631172 321.726676,57.7133241 L321.726676,92.9989517 L303.337048,92.9989517 L303.337048,25.6868414 L320.850979,25.6868414"></path> <path d="M407.657931,37.727669 C404.6848,37.727669 402.230731,38.3844414 400.256883,39.7474207 C398.240662,41.106869 396.5952,42.8300138 395.338152,44.9662897 C394.077572,47.0884414 393.205407,49.4365793 392.665159,52.0071724 C392.160221,54.5742345 391.877738,57.1165793 391.877738,59.6448 C391.877738,62.0882759 392.160221,64.563531 392.665159,67.0917517 C393.205407,69.6058483 394.0352,71.8763034 395.207503,73.9454897 C396.397462,75.9723034 397.979366,77.6389517 399.977931,78.9560276 C401.965903,80.2660414 404.384662,80.9192828 407.255393,80.9192828 C411.708028,80.9192828 415.119007,79.6763586 417.509517,77.2152276 C419.889434,74.7399724 421.361876,71.4137379 421.983338,67.2471172 L439.84331,67.2471172 C438.618041,76.1771034 435.143503,82.9990621 429.426759,87.7024 C423.688828,92.3739586 416.340745,94.7432828 407.393103,94.7432828 C402.336662,94.7432828 397.742786,93.8817103 393.505545,92.1938759 C389.275366,90.4813241 385.684303,88.1225931 382.725297,85.0788414 C379.76629,82.0280276 377.471117,78.4016552 375.790345,74.1856 C374.148414,69.9624828 373.322152,65.3262345 373.322152,60.2945103 C373.322152,55.0827034 374.088386,50.227531 375.610262,45.7395862 C377.125076,41.2692966 379.363752,37.3957517 382.347476,34.1472 C385.302952,30.8774621 388.918731,28.3351172 393.194814,26.5060414 C397.453241,24.6804966 402.319007,23.7659586 407.781517,23.7659586 C411.778648,23.7659586 415.616883,24.3062069 419.324469,25.3160828 C423.003807,26.3471448 426.312386,27.9396414 429.214897,30.0759172 C432.124469,32.198069 434.507917,34.8428138 436.333462,37.9960276 C438.137821,41.1492414 439.168883,44.9274483 439.454897,49.2459034 L421.319503,49.2459034 C420.118952,41.5623724 415.563917,37.727669 407.657931,37.727669"></path> <path d="M98.7489103,6.24849655 L136.442703,6.24849655 L136.442703,15.4256552 L98.7489103,15.4256552 L98.7489103,6.24849655 Z"></path> <path d="M489.12949,41.4776276 C486.901407,39.0447448 483.151448,37.727669 478.667034,37.727669 C475.71509,37.727669 473.261021,38.2255448 471.269517,39.2389517 C469.352166,40.2382345 467.600772,41.4846897 466.424938,42.950069 C465.249103,44.4401655 464.405186,46.0114759 463.914372,47.6922483 C463.476524,49.3306483 463.169324,50.8172138 463.08811,52.1307586 L493.405572,52.1307586 C492.911228,47.4132966 491.336386,43.9281655 489.12949,41.4776276 L489.12949,41.4776276 Z M467.650207,76.851531 C470.429131,79.5563034 474.624,80.9192828 479.849931,80.9192828 C483.571641,80.9192828 486.788414,79.9764966 489.475531,78.0944552 C492.162648,76.2194759 493.829297,74.2103172 494.42251,72.1270069 L510.707641,72.1270069 C508.105269,80.230731 504.108138,86.0180966 498.72331,89.4996966 C493.349076,92.9989517 486.84491,94.7432828 479.207283,94.7432828 C473.889545,94.7432828 469.097931,93.8817103 464.846566,92.1938759 C460.570483,90.4813241 456.986483,88.0802207 453.988634,84.9517241 C451.022566,81.8091034 448.748579,78.0944552 447.131366,73.7336276 C445.524745,69.3939862 444.726731,64.5882483 444.726731,59.3799724 C444.726731,54.3447172 445.552993,49.6413793 447.198455,45.2946759 C448.865103,40.9338483 451.234428,37.1697655 454.267586,34.0130207 C457.343117,30.8386207 460.93771,28.3351172 465.150234,26.5060414 C469.380414,24.6804966 474.07669,23.7659586 479.207283,23.7659586 C484.895779,23.7659586 489.906317,24.8605793 494.140028,27.0957241 C498.412579,29.2955586 501.922428,32.2792828 504.648386,36.0151172 C507.392,39.7474207 509.365848,44.0129103 510.576993,48.793931 C511.770483,53.5714207 512.229517,58.5607724 511.887007,63.7867034 L463.08811,63.7867034 C463.08811,69.1079724 464.864221,74.1467586 467.650207,76.851531 L467.650207,76.851531 Z"></path> </g> </svg>
    						</a>
    					</div>
    				</div>`;
    	}

    	if(data.keyword) {
    		el.insertAdjacentHTML('beforeEnd', inspi_tpl({keyword: data.keyword}));
    	}
    }
});
