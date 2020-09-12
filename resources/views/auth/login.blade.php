@extends('layouts.app', ['title' => 'Login'])

@section('content')
    <div class="container mx-auto py-20 px-20">
        <div class="flex flex-wrap -mx-6 items-center">
        	<div class="w-7/12 px-6 text-center">
        		<svg class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6120.9 5275.15"><defs><style>.cls-1{fill:#f7f7f7;}.cls-2,.cls-3,.cls-9{fill:none;stroke-linecap:round;stroke-linejoin:round;}.cls-2{stroke:#b2c3fb;}.cls-2,.cls-3{stroke-width:10px;}.cls-3{stroke:#eaf0ff;}.cls-4{fill:#d7e0ff;}.cls-5{fill:#eaf0ff;opacity:0.67;isolation:isolate;}.cls-6{fill:#fff;}.cls-7{fill:#3c3744;}.cls-8{fill:#46dbc9;}.cls-9{stroke:#1b3c87;stroke-width:25px;}.cls-10{fill:#eecb55;}.cls-11{fill:#1b3c87;}.cls-12{fill:#e49d75;}</style></defs><title>Ilustrasi ini oleh Drawkit</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M4777.44,1045.43C5275.3,1621.76,5660,2231.55,5697.26,2877.35c36,645.81-276.59,1328.92-774.45,1785.61-496.57,456.7-1179.68,687-1765,590.49-584.06-97.77-1072.91-522.31-1693-979C846,3817.76,94.72,3328.9,117.87,2864.49c21.87-465.7,818.19-908.25,1438.27-1485.87C2176.21,802.29,2618.76,92.16,3144.92,8.54S4280.87,469.09,4777.44,1045.43Z"/><path class="cls-2" d="M659.78,2052.34l352.41-380.77L1364.6,1290.8l153.55,495.58L1671.71,2282l-506-114.81Z"/><path class="cls-3" d="M5237.57,1238.58l-197.18,718.05L5688.69,1831Z"/><path class="cls-4" d="M1145.14,1297.46H2795.69V3024.25H1145.14Z"/><path class="cls-5" d="M1747.26,1099.76H4958.67V3414.13H1747.26Z"/><path class="cls-4" d="M3757.75,1705.78c0-227.82,184.69-412.5,412.5-412.5s412.51,184.68,412.51,412.5-184.69,412.5-412.51,412.5S3757.75,1933.6,3757.75,1705.78Z"/><path class="cls-3" d="M3033.84,3742.32c0-232.59,188.56-421.15,421.15-421.15s421.14,188.56,421.14,421.15S3687.58,4163.46,3455,4163.46,3033.84,3974.91,3033.84,3742.32Z"/><path class="cls-6" d="M4332.74,913.82v319.25l2,0v340.81l-238.12-254.6H3411.93V913.82Z"/><path class="cls-6" d="M2248.45,1459.45V1778.7l-2,0v340.81l238.13-254.59h684.71V1459.45Z"/><path class="cls-6" d="M4773.45,2273.13c0,228.33,99.24,269.73,99.24,311.14s-45,268.51-57.84,298.35c33.49,46.88,269.73,71.24,314.79,59.06,3.65-44.45,60.28-333.67,73.07-353.15s155.87-134,155.87-228.94c0-212.5-14-495-155.26-495C5031.61,1864.57,4773.45,1948,4773.45,2273.13Z"/><path class="cls-7" d="M5486.22,2952.49c-110.46,2.74-349.13,45.53-349.13,45.53-1.37,116.6,30.42,1352.47,35.22,1538.39h681.62L6095.4,3134.14a181.64,181.64,0,0,0-181.65-181.65s-293.37,4.25-407.28,0C5500.35,2952.29,5493.58,2952.3,5486.22,2952.49Z"/><path class="cls-6" d="M1903,4002.43C1941.87,3981,2317.52,3703,2338.06,3677s94.27-174.55,100.47-184.24,45.64-27.81,50.57-23.63c30.26,25.69-18.24,113.15-24,126.52,28.17-25.71,206.39-165.06,228.23-158.21,157,49.29,98.25,258.81-.42,309.86-27,14-174.83,70.42-189,82.78s-636,530.08-649.93,540C1846.21,4334.39,1864.06,4023.83,1903,4002.43Z"/><path class="cls-6" d="M4154.11,3276.08c-26.76,39.61-94.44,138.43-121.21,177-287.91-378.81-586-598.17-664.25-972-75.76-48.21-71.41,123.84-14.5,252.64-88.85,56.84-173,113.85-147.15,156,99,161.17,128.79,110.46,165.77,113.78S3706,3614.1,3791.35,3709.62c62.9,70.41,111.77,152.73,306.2,236.38,20.9-177.94,151.93-599.27,178.68-631.25C4252.2,3297.55,4180.87,3236.48,4154.11,3276.08Z"/><path class="cls-8" d="M4249.67,3357.6c-89.15-68-149.42-121.52-151-146.65-3.77-59.43,352.43-565.88,594.8-405.27C4796.3,2880.4,4426,3489.12,4249.67,3357.6Z"/><path class="cls-9" d="M4445.43,2782.1c78.1-38.74,158.23-48.46,228.73-1.74"/><path class="cls-9" d="M4230.38,3332.28c-90.48-66.18-149.42-121.52-151-146.65-1.63-25.7,64-135,158.68-237.73"/><path class="cls-8" d="M4919.22,2765.74c-712.79,6.51-855,1230.58-888,1770.67h1349.4c170.27-529.81,296.16-1660.16-349.44-1762.17A681.66,681.66,0,0,0,4919.22,2765.74Z"/><path class="cls-7" d="M219.9,2916.42A181.65,181.65,0,0,0,38.25,3098.08s130.67,1058,178.31,1443.66h982.19c-.09-62.22-2-1374.53-12.06-1625.32Z"/><path class="cls-8" d="M1435.34,2873c-653.51,0-782.65,1139.83-763.63,1668.72H1869.5C1976.13,4018,1993.82,2873,1435.34,2873Z"/><path class="cls-9" d="M1882.44,3703.12c16.19,309-16.62,630.73-62.88,836.37"/><path class="cls-9" d="M1558.61,2872.88c116.35,61.92,195.63,191.24,247.06,354.53"/><path class="cls-9" d="M1037,2982.8c51.66-51,109.25-91.57,173.33-118.79"/><path class="cls-9" d="M1890.38,3969.79c43.9-23.11,391.41-280,423.71-314.09s86-173.8,109.49-194.47,39.13-32,53.11-16.59-10.57,92.72-41,133.29c57.36-59.54,192.31-154,240-170.56"/><path class="cls-9" d="M2109.24,4119.72c-122.41,105.47-233.18,201.63-252.66,219.08"/><path class="cls-9" d="M2677.62,3712.56c-53.52,27.27-159.16,67.06-208,101.92-13.94,9.95-66.25,53.68-134.91,112"/><path class="cls-9" d="M2511.29,3589c16.66-13.8,68.3-50.7,119.76-84,47.79-31,95.43-58.82,114.73-62.21"/><path class="cls-9" d="M2552.78,3637.22c16.66-13.79,68.3-50.7,119.76-84,47.79-30.95,95.43-58.81,114.73-62.2"/><path class="cls-9" d="M2572.77,3702.45c14.8-12.44,60.65-45.72,106.33-75.77,42.44-27.91,84.73-53,101.87-56.09"/><path class="cls-6" d="M5202.93,2584.88c-13,37.1-71.55,311.56-75.88,354.85-55,19.79-281.27-13.07-309.72-56.36,27.83-81.63,57.41-243.59,54.93-311.62"/><path class="cls-9" d="M4800.32,2858.73c27.83-81.63,57.41-243.59,54.93-311.61"/><path class="cls-9" d="M5185.92,2560.24c-13,37.11-71.55,311.56-75.88,354.85-26.73,9.61-93.82,6.81-159-3.58"/><path class="cls-9" d="M4779.8,2107.48c17.47-52.19,43.41-103.22,69.91-141.77"/><path class="cls-9" d="M5064.4,2613.49c-29.82,6-60.07,6.21-89.85-.16-139.41-29.81-228.16-185.25-220.27-366.31"/><path class="cls-9" d="M5139.37,2779.77c498.73,240,370.55,1285.89,208.27,1759.3"/><path class="cls-9" d="M4124.52,3695.35C4233.81,3239,4439.4,2795.13,4826,2735.65"/><path class="cls-9" d="M4007.74,4539.56c6.07-108.79,17.26-251.12,37.84-408.25"/><path class="cls-9" d="M5286.48,4075.46c9,133,18.79,255.82,26.32,292.48-39.78,48.37-132.27,171.22-132.27,171.22"/><path class="cls-9" d="M5261.48,3669.45c1.14,16.67,4.46,75.13,9,151.87"/><path class="cls-9" d="M4129.17,3252.46c-13.34,19.52-118.86,176.32-118.86,176.32s-472-558.51-504-602.29C3410.62,2695.75,3365,2536.08,3359.75,2501c-5-33.14-21-72.26-48.73-53.92-43.78,33-15.16,201.77,18.45,259.44"/><path class="cls-9" d="M3274.76,2725.82c1.14,29.1,27.89,118.55,71,159.14"/><path class="cls-9" d="M3223.49,2777.55c4,28.84,39.46,115.22,86.4,151.35"/><path class="cls-9" d="M3172.63,2830.51c5.74,28.55,46.33,112.63,95.36,145.87"/><path class="cls-9" d="M3652.21,3512.68c-97.74-173.55-180.68-366.94-282.21-508.48"/><path class="cls-9" d="M4077.63,3919.1c-90.36-21.75-166.35-71-232.85-137.41"/><path class="cls-9" d="M4832.51,2142.63c7.19-34.13,33-57.59,57.67-52.4s38.83,37.06,31.65,71.2"/><path class="cls-9" d="M5068.75,2197.44c7.18-34.13,33-57.59,57.67-52.4s38.83,37.06,31.65,71.2"/><path class="cls-9" d="M4964.19,2212.23c-14.65,20.26-53,65.46-71.07,74.19"/><path class="cls-9" d="M4974.19,2356c21,4.23,66.72,7.21,113-1.54,9.54,33.91,0,107.83-86.24,120.19"/><path class="cls-9" d="M611.32,2888.11H1161"/><path class="cls-9" d="M194,4539.2,12.5,3069.77a181.66,181.66,0,0,1,181.67-181.66h68.44"/><path class="cls-9" d="M5852.52,2930.08H5472.3"/><path class="cls-9" d="M5813.75,4539.49l215.69-1243.12"/><path class="cls-9" d="M2209.93,1957l-.18,118.91,245.9-251.22h677.88V1418.77h-97.2"/><path class="cls-9" d="M2822.62,1418.77h-612.5v337.74"/><path class="cls-9" d="M2317.36,1541.73h670.31"/><path class="cls-9" d="M2317.36,1700.14h234"/><path class="cls-9" d="M4164.82,876.46h127.69v405.93l.37,251.22L4047,1282.39H3369.1v-54.61"/><path class="cls-9" d="M3369.1,1070.9V876.46h511.14"/><path class="cls-9" d="M4185.27,999.42H3515"/><path class="cls-9" d="M3753.24,1157.83h-234"/><path class="cls-6" d="M501.46,3584.11l.69,1.78c-23.81,53.37-237.19,657.46-227.81,707.52,9.43,50.39,59.44,139.21,96.22,159.75,16.81,9.41,185.18,45.46,386,88.58H1967.69c-24.74-63-128.13-114.95-223.79-115.14-32.45-1.07-83.22,1.15-120.09,43.29-364.87-168.4-773.59-264.65-892.41-295.59l-13-33.66c39.51-75.57,158.62-294.25,175.25-328.31C830.35,3780.16,505.82,3586.72,503,3585l-.21-.6c0,.07-.13.28-.16.35Z"/><path class="cls-9" d="M318.55,4037.81c-36,113.43-62.47,206.83-59,225.24,9.43,50.38,59.41,139.17,96.19,159.73,20.34,11.36,258.6,62.09,512.74,117"/><path class="cls-9" d="M486.19,3553.78c-9.38,20.35-55.08,147.11-103,288.22"/><path class="cls-9" d="M881.79,3779.93c-24.63,40.1-184.64,342.37-188.67,355,75.66,22.11,525.09,120.86,918.87,302.61,36.88-42.15,87.63-44.36,120.08-43.28,110.44.21,229.35,57.34,229.35,145"/><path class="cls-8" d="M1059.75,3042.47c272.37,159.25-13.08,765.11-86.78,784.38-144.83,10-478.35-199.1-510.45-283.74S791,2885.31,1059.75,3042.47Z"/><path class="cls-9" d="M1141.8,3393.71c-40.56,193.68-145.22,381.87-185.78,392.48-144.83,10-478.35-199.11-510.45-283.76-11.76-31,29.21-127.65,99.07-229.89"/><path class="cls-9" d="M713,3080.77c104.54-89.76,224.27-140.7,329.84-79,42,24.57,70.77,59.78,89.07,101.83"/><path class="cls-6" d="M1220.14,2997.36c39.66-107.81,33.53-470.22,29.6-506.07-4.74-43.27-37.32-355.3,40.91-421.22s198.47-139.79,269.45-134.72,282.22,217.63,282.22,475-234,380.31-288.89,382c-7.5,57.15-6.92,210.12-6.92,265.53C1524,3079.47,1277.67,3072.21,1220.14,2997.36Z"/><path class="cls-10" d="M1259.2,2265.68c-36.67-2.24-65.15,30.84-95.77,62.41C1136,2125,1231.69,1767.87,1369,1743.44c23.6.93,26.57,32.21,19.68,59.74,86.13-78.56,247.91-122.21,316.58-122.79,89,0,120.46,70.19,120.46,94.28,0,61-40,152.14-54.71,175.74,23.54-12.52,42.4-17.09,60.59-17.09,45.78,0,57,71,57,92.16,0,73.84-78.19,149-117,149-18.19,0-68.47-28.33-83.71-49.47,5.37,15.7,11.33,20.1,11.55,44.23.17,19.91-28.77,30.84-46,30.84-45.62,0-136.06-89-218.8-89-27.53,0-62.27,39.45-62.27,61.69S1384,2300,1377,2303.65c-21.36,16.83-31.27-33.23-116.07-38.67"/><path class="cls-9" d="M1777.92,2538.88c-52.85,130.67-160.88,220.21-285.57,220.21-63.14,0-122-23-171.6-62.6"/><path class="cls-9" d="M1765.89,2148.79c31.51,62.26,46.55,129.07,46.55,208.3a509.08,509.08,0,0,1-3,55.36"/><path class="cls-9" d="M1517,3025.08c-3.45-63.75-1.5-229.93,7.11-266.11"/><path class="cls-9" d="M1219.66,2795.48c-5,65.13-13.3,126.11-26.6,168.15,25.34,29.72,93.29,52.45,164,63.09"/><path class="cls-9" d="M1219.48,2462.81c3.89,18.6,7.78,104.86,6,204.19"/><path class="cls-11" d="M1447,2278.2c0-19.23,8.27-34.83,18.48-34.83s18.47,15.6,18.47,34.83-8.27,34.83-18.47,34.83S1447,2297.44,1447,2278.2Z"/><path class="cls-11" d="M1709.86,2292.13c0-19.23,8.27-34.82,18.47-34.82s18.48,15.59,18.48,34.82-8.27,34.83-18.48,34.83S1709.86,2311.37,1709.86,2292.13Z"/><path class="cls-9" d="M1635.8,2370.21c4.33,30.69,29.4,82.12,57.06,102"/><path class="cls-9" d="M1620.68,2546.56c-19-2.59-79.54-35-91.64-58.35-22.48,10.81-33.72,87.31,12.1,99"/><path class="cls-9" d="M1766.32,2148.68a45.32,45.32,0,0,1-14.83,2.9c-36.62,0-98.11-61.5-98.11-61.5,13.82,33.86,22.11,43.53,22.11,57.35s-17.28,29-42.83,29.71c-62.24,1.77-131-88.72-218.36-88.72-22.77,0-67.26,31.17-67.26,68.84,0,25.42,8,98.5,8,116,0,7-4,11.68-11.46,14.81"/><path class="cls-9" d="M1637.14,1663.91A318.46,318.46,0,0,1,1679,1661c67.71,0,122.29,45.6,122.29,96.73s-38,152-63.57,176.19c33.86-15.2,43.53-20.73,67-20.73,49.52,0,58.73,52.51,58.73,91.89,0,69.13-58.15,129.87-97.1,143.58"/><path class="cls-9" d="M1214.29,1864.09c44.55-93.44,96.58-143,120.72-143,46.61,0,31.5,49.13,29.61,64.88,17-17.43,83.8-62.38,164.45-93.33"/><path class="cls-9" d="M1138.49,2198.11c3.23-94.18,18.85-175.57,40.22-243.13"/><path class="cls-6" d="M1280.43,2473.85a111.32,111.32,0,1,1,80.75-161.79"/><path class="cls-9" d="M1267.61,2463.17a111.32,111.32,0,1,1,80.75-161.79"/><path class="cls-6" d="M5716.5,3629.83c-81.5,41.85-238,66.27-436,73.19,5.5,116.25,32.1,482.79,46.25,683.94-30.82,44.95-75.84,103.66-111.69,149.45h337.22c52.81-85,125.77-206.9,136.59-235.95C5705.5,4255.81,5710.19,3823.6,5716.5,3629.83Z"/><path class="cls-9" d="M5700.08,3592.52c-1.5,53.19-16.48,657-29.21,694.46s-116,208.64-149,253"/><path class="cls-8" d="M5357.89,2921.42c273.7-59.76,461.59,605.44,421.54,661.37s-533.34,137.08-577.38,97S5128.68,2971.47,5357.89,2921.42Z"/><path class="cls-9" d="M5426.29,3652.29c-118.9,17.53-228.76,23.9-248.49,5.94-25.83-23.52-46.61-263.26-13.08-467.51"/><path class="cls-9" d="M5378.54,2896.4c249,15.89,414.46,612,376.65,664.83-11,15.39-56.35,32.69-117.19,48.85"/><path class="cls-12" d="M5416.11,2322.78c70.3-69.66,108.34-221.09,108.34-303.89,0-170.23-100.13-240.1-118.86-240.1s-38.41,39.39-35.41,66.94c-16.91-23.46-165.29-168.6-432.75-168.6-74.09,0-127.3,35.89-127.3,94.91,0,26.84,12.43,68.73,34,83.13-21.93,1.63-53,17.31-53,60.87,0,49.76,66.77,73.3,93.27,73.3s65.78-27.49,84.76-53.34c5.9,28.47-11.92,74.86,50.08,75.27,26.18.17,136.46-55.64,157.08-74.29-20.94,36-49.74,52.53-49.74,93.27,0,38.11,18.65,64.8,47.45,64.8s111.92-39.27,127.31-57c3.27,25.86-25.56,206.29-16.88,255.48,28.94,2.17,64.46-34.68,64.92-4.47"/><path class="cls-9" d="M5097.28,1950.73c27.13-13.93,51.27-28.14,59.85-35.9-20.94,36-49.74,52.52-49.74,93.27,0,38.11,18.65,64.79,47.45,64.79s111.92-39.27,127.3-56.94c3.28,25.85-25.55,206.28-16.87,255.47,28.94,2.18,64.46-34.67,64.92-4.46"/><path class="cls-9" d="M4997.33,1659.34a710.26,710.26,0,0,0-79.1-4.36c-74.09,0-127.31,35.89-127.31,94.91,0,26.83,12.44,68.72,34,83.12-21.93,1.64-53,17.32-53,60.87,0,49.77,66.76,73.31,93.27,73.31s65.78-27.49,84.76-53.35c5.4,26.06-9.07,67.14,36,74.22"/><path class="cls-9" d="M5495.66,2083.06c6.34-32.13,9.59-62.15,9.59-86.33,0-170.22-100.13-240.1-118.86-240.1S5348,1796,5351,1823.57c-11.36-15.75-82.07-86.44-208.36-131.13"/><path class="cls-9" d="M5396.91,2300.63c24.27-24.06,44.7-57.86,61.05-95.22"/><path class="cls-9" d="M5312.19,2272.21a72.78,72.78,0,1,1-43.81,91.72"/><path class="cls-9" d="M77.5,4539.73H6108.4"/></g></g></svg>
        	</div>
            <div class="w-5/12 px-6">
				@card(['class' => 'shadow-lg rounded-lg', 'bodyClass' => 'p-8'])
                    @include('layouts.login_content', ['title' => 'Bergabung Dengan Pengguna Lainnya dan Mulai Berbagi'])
                @endcard
            </div>
        </div>
    </div>
@endsection
