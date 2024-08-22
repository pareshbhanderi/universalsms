---
layout: default
title: How to Start/Stop/Restart SOLR ?
---
<div class="backtoprevpage">
  <button id="backButton">Go Back</button>
</div>
<div class="page-title">
  <h2>How to Start/Stop/Restart SOLR ?</h2>
</div>
<div class="sub-section">
  <div class="section-content">
    <p>We are expecting that you have completed <a href="javasetup.html" target="_blank">Java Setup</a> and <a href="solrsetup.html" target="_blank">download Solr</a> on your machine.</p>
    <p>To start the Solr Server,  all you need is to run few commands on your command prompt.  Assuming you have extracted the Solr folder to <strong>"C:\Solr</strong></p>
  </div>
  <div class="section-content">
    <ul class="info-badges">
      <li>
        <div class="subinfo-title">
          <strong>Open Command prompt and execute below commands</strong>
        </div>
        <div class="subinfo-content">
          <p><strong>[Note:</strong> You can also start solr on <strong>system startup</strong> , please check <a href="startsolronsystemstartup.html" target="_blank">steps here</a>.]</p>
          <ul class="subinfo-badges">
            <li>
              <p>select the location of bin folder of  c:/ > solr > bin</p>
              <div class="product-img">
                <img src="{{ site.baseurl }}/assets/images/cmd.png" alt="cmd" />
              </div>
            </li>
            <li>
              <p>You can <strong>start</strong> Solr using command : <strong>solr start -p 8983</strong> , Once your solr is started you can move forward for <a href="creatinganewcore.html" target="_blank">Creating New Core</a> Here,  <strong>-p</strong> specifies the port number on which your solr  server will run.</p>
              <div class="product-img">
                <img src="{{ site.baseurl }}/assets/images/cmd2.png" alt="cmd2" />
              </div>
            </li>
            <li>
              <p>You can <strong>stop</strong> Solr using command : <strong>solr stop -p 8983</strong></p>
              <div class="product-img">
                <img src="{{ site.baseurl }}/assets/images/stop.png" alt="stop" />
              </div>
            </li>
            <li>
              <p>You can <strong>restart</strong> Solr using command : <strong>solr restart -p 8983</strong></p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</div>  
