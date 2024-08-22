---
layout: default
title: Error while performing indexing using DataImportHandler
---
<div class="backtoprevpage">
  <button id="backButton">Go Back</button>
</div>
<div class="page-title">
  <h2>Error while performing indexing using DataImportHandler</h2>
</div>
<div class="sub-section">
  <div class="sub-title">
    <h3>
      <span>Question</span>
    </h3>
  </div>
  <div class="section-content">
    <ul class="subinfo-badges">
      <li>I get below error when I try to index data using DataImportHandler</li>
      <li>com.microsoft.sqlserver.jdbc.SQLServerException: The TCP/IP connection to the host localhost, port 1433 has failed. Error: "Connection refused: connect. Verify the connection properties. Make sure that an instance of SQL Server is running on the host and accepting TCP/IP connections at the port. Make sure that TCP connections to the port are not blocked by a firewall.</li>
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
    <ul class="info-badges">
      <li>
        <p>Click <strong>Windows key + R</strong> and open the <strong>Run</strong> window.</p>
      </li>
      <li>
        <div class="subinfo-title">
          <p>Execute below command according to you SQL Server Version</p>
        </div>
        <div class="subinfo-content">
          <ul class="subinfo-badges">
            <li><p><strong>SQLServerManager15.msc</strong> for [SQL Server 2018]</p></li>
            <li><p><strong>SQLServerManager14.msc</strong> for [SQL Server 2017]</p></li>
            <li><p><strong>SQLServerManager13.msc</strong> for [SQL Server 2016]</p></li>
            <li><p><strong>SQLServerManager12.msc</strong> for [SQL Server 2014]</p></li>
            <li><p><strong>SQLServerManager11.msc</strong> for [SQL Server 2012]</p></li>
            <li><p><strong>SQLServerManager10.msc</strong> for [SQL Server 2008]</p></li>
          </ul>
          <div class="product-img">
            <img src="{{ site.baseurl }}/assets/images/sql.png" alt="sql" />
          </div>
          <p><strong>[Note:</strong> If you do not find SQL Configuration Manager,  please check <a href="https://stackoverflow.com/questions/9844771/sql-server-configuration-manager-cannot-be-found" target="_blank">here</a> ]</p>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>Expand <strong>SQL Server Network Configuration.</strong></p>
        </div>
        <div class="subinfo-content">
          <div class="product-img">
            <img src="{{ site.baseurl }}/assets/images/serverconfiguration.png" alt="serverconfiguration" />
          </div>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>Right-click <strong>TCP/IP</strong> and  select <strong>Enable.</strong></p>
        </div>
        <div class="subinfo-content">
          <div class="product-img">
            <img src="{{ site.baseurl }}/assets/images/tcp.png" alt="tcp" />
          </div>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>Restart your SQL Server Services.</p>
        </div>
        <div class="subinfo-content">
          <div class="product-img">
            <img src="{{ site.baseurl }}/assets/images/restart.png" alt="restart" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>  
