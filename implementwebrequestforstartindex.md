---
layout: default
title: Implement WebRequest for StartIndexing method
---
<div class="backtoprevpage">
  <button id="backButton">Go Back</button>
</div>
<div class="page-title">
  <h2>Implement WebRequest for StartIndexing method</h2>
</div>
<div class="sub-section">
  <div class="sub-title">
    <h3>
      <span>Question</span>
    </h3>
  </div>
  <div class="section-content">
    <ul class="subinfo-badges">
      <li>How to Implement WebRequest for StartIndexing method ?</li>
    </ul>
  </div>
</div> 
<div class="sub-section">
  <div class="sub-title">
    <h3>
      <span>Solution</span>
    </h3>
  </div>
  <div class="section-content">
    <ul class="subinfo-badges">
      <li>Start Indexing is async method so if you request it will work in background & will not impact on your website traffic.</li>
      <li>
        <strong>Implementing StartIndexing get method in third party tool</strong>
      </li>
    </ul>
  </div>
  <div class="section-content">
    <blockquote>
      <pre>
        string webAddr = &lt;DomainName&gt;/Admin/NopAcceleratePlusSearch/StartIndexing;

        var httpWebRequest = (HttpWebRequest)WebRequest.Create(webAddr);

        httpWebRequest.ContentType = "application/json";

        httpWebRequest.Method = "GET";

        HttpWebResponse httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();

        if (httpResponse.StatusCode == HttpStatusCode.OK)
        {
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var responseText = streamReader.ReadToEnd();
            }
        }
</pre>
    </blockquote>
    <ul class="subinfo-badges">
      <li>Please call this method, once your updation is done using third party / external tools / script so it will make 100% indexing for your catalog.
      </li>
    </ul>
  </div>
</div>