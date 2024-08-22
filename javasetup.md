---
layout: default
title: JAVA Setup
---
<div class="backtoprevpage">
  <button id="backButton">Go Back</button>
</div>
<div class="page-title">
  <h2>JAVA Setup</h2>
</div>
<div class="sub-section">
  <div class="sub-title">
    <h3>
      <span>To setup SOLR and nopAccelerate plus on your machine the first step is to install and setup JAVA, please follow below steps</span>
    </h3>
  </div>
  <div class="section-content">
    <ul class="info-badges">
      <li>
        <div class="subinfo-title">
          <strong>Download JAVA Latest Version from <a href="https://java.com/en/download/manual.jsp" target="_blank">here.</a></strong>
        </div>
        <div class="subinfo-content">
          <p>Download latest Java Version and Install Java . You can choose the version as per your system requirements but we prefer <strong>Windows Off line (64-bit)</strong> setup. After successful installation you can check the JAVA path, It is different for windows 32 bit and windows 64 bit.</p>
          <ul class="subinfo-badges">
            <li>For Windows 32 bit: “C:\Program Files (x86)\Java”</li>
            <li>
              <span>For Windows 64 bit: “C:\Program Files\Java”</span>
              <div class="product-img">
                <img src="{{ site.baseurl }}/assets/images/windows.png" alt="windows" />
              </div>
              <p>Now its time to define the “JAVA_HOME” Environment Variable which will helps SOLR to find the JAVA location.</p>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <strong>Define "JAVA_HOME"  Environment Variable.</strong>
        </div>
        <div class="subinfo-content">
          <ul class="subinfo-badges">
            <li>
              <p>Do one of the following</p>
              <p><strong>Windows 7</strong> – Right click My Computer and select Properties > Advanced System Settings</p>
              <p><strong>Windows 8</strong> – Go to Control Panel > System > Advanced System Settings</p>
              <p><strong>Windows 10</strong> – Search for Environment Variables then select Edit the system environment variable.</p>
            </li>
            <li>
              <p>Click the <strong>Environment Variables</strong> button.</p>
              <div class="product-img">
                <img src="{{ site.baseurl }}/assets/images/environmentvariable.png" alt="environment" />
              </div>
            </li>
            <li>
              <p>Under <strong>System Variables</strong>, click <strong>New</strong>.</p>
              <div class="product-img">
                <img src="{{ site.baseurl }}/assets/images/system-variable.png" alt="system" />
              </div>
            </li>
            <li>
              <p>In the <strong>Variable Name</strong> field add JAVA_HOME and In <strong>Variable Value</strong> field add your JDK installation path C:\Program Files\Java\jre1.8.0_201</p>
              <div class="product-img">
                <img src="{{ site.baseurl }}/assets/images/jdkpath.png" alt="jdkpath" />
              </div>
              <p>Click OK, you will see the newly added Variable name “JAVA_HOME” in the list as shown in below</p>
              <p>Hence, you are done with configuring Environment variable.</p>
              <div class="product-img">
                <img src="{{ site.baseurl }}/assets/images/javahome.png" alt="javahome" />
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</div>  
