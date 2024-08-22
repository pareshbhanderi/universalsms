---
layout: default
title: Creating a new Core
---
<div class="backtoprevpage">
  <button id="backButton">Go Back</button>
</div>
<div class="page-title">
  <h2>Creating a new Core</h2>
</div>
<div class="sub-section">
  <div class="section-content">
    <ul class="info-badges">
      <li>
        <div class="subinfo-title">
          <p>After installing and starting Solr, you can connect to the client (web interface) of Solr. You can verify the setup and installation simply by running solr on the port you specified. We have created core on 8983 port so we can access <strong>localhost:8983/solr/#/</strong> on any browser.</p>
        </div>
        <div class="subinfo-content">
          <div class="product-img">
            <img src="{{ site.baseurl }}/assets/images/create_core.jpg" alt="create_core" />
          </div>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>As highlighted in the above screen shot, initially there are no cores in Apache Solr. Now, we will see how to create a core in Solr.</p>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>A simple way is to <strong>create</strong> command <strong>(solr create -c Solr_sample -p 8983)</strong> as shown below</p>
        </div>
        <ul class="subinfo-badges">
          <li>
            <p>Here, we are trying to create a core named <strong>Solr_sample</strong> in Apache Solr. This command creates a core displaying the following message.</p>
            <div class="product-img">
              <img src="{{ site.baseurl }}/assets/images/createcore.png" alt="createcore" />
            </div>
          </li>
        </ul>
      </li>
      <li>
        <div class="subinfo-title">
          <p>You can create multiple cores in Solr. On the left-hand side of the Solr Admin, you can see a <strong>core selector</strong> where you can select the newly created core, as shown in the following screenshot.</p>
        </div>
        <ul class="subinfo-badges">
          <li>
            <p>To check the created core, you can look at <strong>C:\Solr\server\solr\Solr_sample location</strong></p>
          </li>
          <li>
            <p><strong>[Important Note</strong> : If your Solr is hosted on shared server then you need to  <a href="setupcoreifyoursolrishostedonsha.html" target="_blank">follow steps</a>  to make nopAccelerate Plus workable.]</p>
            <div class="product-img">
              <img src="{{ site.baseurl }}/assets/images/core_selector.jpg" alt="core_selector" />
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>