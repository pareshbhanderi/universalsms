---
layout: default
title: Setup core if your Solr is hosted on shared server
---
<div class="backtoprevpage">
  <button id="backButton">Go Back</button>
</div>
<div class="page-title">
  <h2>Setup core if your Solr is hosted on shared server</h2>
</div>
<div class="sub-section">
  <div class="sub-title">
    <h3>
      <span>If you using Shared Server for solr Server then you need some Setup for Core</span>
    </h3>
  </div>
  <div class="section-content">
    <ul class="info-badges">
      <li>Put the remote solr server url in Solr Core URL Field & save the configure page.</li>
      <li>Click on Core setup will take some time to setup solrcore & you will find that (Managed Schema, Core Stream Body & Pattern Handler) will be done correctly but (DB Config File & Request Handler) will showing the <strong>RED CROSS</strong> sign which means we need to setup some file manually.</li>
    </ul>
  </div>
</div> 
<div class="sub-section">
  <div class="sub-title">
    <h3>
      <span>Manual Steps to do for remote server Hosting</span>
    </h3>
  </div>
  <div class="section-content">
    <ul class="info-badges">
      <li>Open nopAccelerate plus => nopAccelerate+ search => Configure page to download the setup required files on Remote server.</li>
      <li>Find the <strong>'Setup files download'</strong> option & download the required setup files by clicking the button which will download the zip file.</li>
      <li>Unzip the file which contains 3 files: db-data-config.xml, solrconfig.xml, and synonyms.txt. Copy these files and paste them into the Conf folder of your Solr Data Directory. Once done, please reload the Core from Solr Admin.</li>
      <li>Before connecting to SQL Server database from Solr, install Microsoft JDBC Driver into Solr. Copy sqljdbc42.jar file from the extracted folder and paste it into Solr's lib folder for dataimporthandler. On Windows, it should be at <strong>C:\solr-7.5.0\contrib\dataimporthandler\lib.</strong> Please create the folder if it's not already there.</li>
      <li>Once you’ve completed the manual setup, click on the Reload Button of the Configure page to Reload the Core to apply the changes.</li>
      <li>Go to Core setup again; this time the Request Handler will be configured correctly, so you just need to manually update the setting for DbConfigFileStatus to true and perform indexing.</li>
      <li>If indexing works, it means you have correctly set up the remote core setup.</li>
    </ul>
  </div>
</div>  
