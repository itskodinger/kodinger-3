@extends('layouts.app', ['title' => 'Privacy Policy'])

@section('content')
<div class="container mx-auto">
    <div class="flex py-12 -mx-8 justify-center">
        <div class="w-8/12 px-6">
            <form method="post" id="form">
                <div class="p-8 bg-white border-2 border-gray-200 rounded">
                    <div id="form-block">
                        <h1 class="text-indigo-600 text-xl font-bold pb-1 mb-6">Privacy Policy</h1>

                        <p class="text-sm text-gray-600 mt-2">Kodinger app as an Open Source app. This SERVICE is provided by at no cost and is intended for use as is.</p>
                        <p class="text-sm text-gray-600 mt-2">This page is used to inform visitors regarding Kodinger policies with the collection, use, and disclosure of Personal
                        Information if anyone decided to use Kodinger.</p>
                        <p class="text-sm text-gray-600 mt-2">This page is used to inform visitors regarding Kodinger policies with the collection, use, and disclosure of Personal
                        Information if anyone decided to use Kodinger</p>
                        <p class="text-sm text-gray-600 mt-2">If you choose to use Kodinger, then you agree to the collection and use of information in relation to this policy. The
                        Personal Information that Kodinger collect is used for providing and improving Kodinger. I will not use or share your
                        information with anyone except as described in this Privacy Policy.</p>
                        <p class="text-sm text-gray-600 mt-2">The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at
                        Kodinger unless otherwise defined in this Privacy Policy.</p>

                        <h3 class="text-lg font-bold text-gray-600  pb-1 pt-4 mb-6">Information Collection and Use</h3>

                        <p class="text-sm text-gray-600 mt-2">For a better experience, while using Kodinger, Kodinger may require you to provide us with certain personally identifiable
                        information, including but not limited to Name, Email, Github Repository, Web Url,H ashtags, Social Media, Analytics, Behaviour.
                        The information that Kodinger request will be retained on your device and is not collected by Kodinger in any way.</p>
                        <p class="text-sm text-gray-600 mt-2">The app does use third party services that may collect information used to identify you.</p>
                        <p class="text-sm text-gray-600 mt-2">Link to privacy policy of third party service providers used by the app</p>

                        <h3 class="text-lg font-bold text-gray-600  pb-1 pt-4 mb-6">Log Data</h3>

                        <p class="text-sm text-gray-600 mt-2">Kodinger want to inform you that whenever you use Kodinger, in a case of an error in the app I collect data and information
                        (through third party products) on your phone called Log Data. This Log Data may include information such as your device
                        Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing Kodinger, 
                        the time and date of your use of Kodinger, and other statistics.</p>

                        <h3 class="text-lg font-bold text-gray-600  pb-1 pt-4 mb-6">Cookies</h3>

                        <p class="text-sm text-gray-600 mt-2">Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to
                        your browser from the websites that you visit and are stored on your device's internal memory.</p>
                        <p class="text-sm text-gray-600 mt-2">Kodinger does not use these “cookies” explicitly. However, the app may use third party code and libraries that use
                        “cookies” to collect information and improve their services. You have the option to either accept or refuse these
                        cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to
                        use some portions of Kodinger.</p>

                        <h3 class="text-lg font-bold text-gray-600  pb-1 pt-4 mb-6">Security</h3>

                        <p class="text-sm text-gray-600 mt-2">Kodinger value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means
                        of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100%
                        secure and reliable, and Kodinger cannot guarantee its absolute security.</p>

                        <h3 class="text-lg font-bold text-gray-600  pb-1 pt-4 mb-6">Links to Other Sites</h3>

                        <p class="text-sm text-gray-600 mt-2">Kodinger may contain links to other sites. If you click on a third-party link, you will be directed to that site.
                        Note that these external sites are not operated by Kodinger. Therefore, Kodinger strongly advise you to review the Privacy Policy of
                        these websites. Kodinger have no control over and assume no responsibility for the content, privacy policies, or practices of
                        any third-party sites or services.</p>

                        <h3 class="text-lg font-bold text-gray-600  pb-1 pt-4 mb-6">Children's Privacy</h3>

                        <p class="text-sm text-gray-600 mt-2">Kodinger does accept anyone at any age.  
                        But In the case you want Kodinger to remove personal information that your child provide to Kodinger, Kodinger will
                        immediately delete the data from Kodinger servers. If you are a parent or guardian and you are aware that your child has provided
                        us with personal information, please contact Kodinger so that Kodinger will be able to do necessary actions.</p>

                        <h3 class="text-lg font-bold text-gray-600  pb-1 pt-4 mb-6">Changes to This Privacy Policy</h3>

                        <p class="text-sm text-gray-600 mt-2">Kodiner may update this Privacy Policy from time to time. Thus, you are advised to review this page periodically for any
                        changes. Kodinger will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective
                        immediately after they are posted on this page.</p>

                        <h3 class="text-lg font-bold text-gray-600  pb-1 pt-4 mb-6">Contact Us</h3>
                        <p class="text-sm text-gray-600 mt-2">If you have any questions regarding this Privacy Policy, Please do not hestitate to contact the awesome peoples behind Kodinger at: <a class="text-blue-600" href="/about">{{url('/about')}}</a>.</p>




                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@stop

@push('js')
<script src="https://cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
@endpush