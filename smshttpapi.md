---
layout: default
title: SMS Http API
---
<div class="backtoprevpage">
  <button id="backButton">Go Back</button>
</div>
<div class="page-title">
  <h2>SMS Http API</h2>
</div>
<div class="sub-section">
  <div class="sub-title">
    <h3>
      <span>SMS Http API</span>
    </h3>
  </div>
  <div class="section-content">
    <ul class="info-badges">
      <li>You need to register with any SMS provider that provides SMS Http API.</li>
      <li>Here I have registered for “smsgatewayhub” for send SMS through SMS Http API. You can register from this URL: <a href="https://www.smsgatewayhub.com/" target="_blank">“https://www.smsgatewayhub.com/”</a> or you can register from different SMS Http API Providers.</li>
      <li>
        <span>If you have registered in “smsgatewayhub” then Go to API Document → Http API Tab and get API URL and if you have registered from different SMS Http API  Providers then you need to get API URL from that providers.</span>
        <div class="product-img">
          <img src="{{ site.baseurl }}/assets/images/NewItem32.png" alt="NewItem32" />
        </div>
      </li>
      <li>
        Get API Key from SMS Http API  Providers and replace API key in URL and Replace country code field with #COUNTRYCODE#, mobile number field with #MOBILENUMBER# and message field with #MESSAGE# respectively.
      </li>
       <li>
        After replacing fields Url Look like this:  “https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=rLssEX9BxkmIHmR47t1D&senderid=WEBSMS&channel=2&DCS=0&flashsms=0&number=#MOBILENUMBER#&text=#MESSAGE#&route=clickhere”
      </li>
      <li>
        <span>Now go to universal SMS plugin → configure page →  interface setting tab.</span>
        <div class="product-img">
          <img src="{{ site.baseurl }}/assets/images/SMS_HTTP_API.png" alt="SMS_HTTP_API" />
        </div>
      </li>
      <li>
        <strong>Country:</strong> Select country for send SMS.
      </li>
      <li>
        <strong>Provider Interface Type:</strong> Select SMS Http Api.  
      </li>
      <li>
        <strong>API/Gateway:</strong> Enter your API URL with replaced tokens and API key.
“https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=rLssEX9BxkmIHmR47t1DnQ&senderid=TESTIN&channel=2&DCS=0&flashsms=0&number=#MOBILENUMBER#&text=#MESSAGE#&route=clickhere”
      </li>
      <li>
        <strong>Active:</strong> Check Active.
      </li>
    </ul>
  </div>
</div>  
