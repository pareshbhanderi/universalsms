---
layout: default
title: How to Delete Core
---
<div class="backtoprevpage">
  <button id="backButton">Go Back</button>
</div>
<div class="page-title">
  <h2>How to Delete Core</h2>
</div>
<div class="sub-section">
  <ul class="info-badges">
    <li>
      <div class="subinfo-title">
        <p>You can delete core using the <strong>delete</strong> command of Apache Solr.</p>
      </div>
      <div class="subinfo-content">
        <ul class="subinfo-badges">
          <li>
            <p>Let’s suppose we have a core named <strong>my_core</strong> in Solr, as shown below</p>
            <div class="product-img">
              <img src="{{ site.baseurl }}/assets/images/deletingcore.jpg" alt="deletingcore" />
            </div>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <div class="subinfo-title">
        <p>You can delete this core using the delete command by passing the name of the core to this command as follows</p>
      </div>
      <div class="subinfo-content">
        <ul class="subinfo-badges">
          <li>
            <p>
              <strong>solr delete -c my_core -p 8983</strong>
            </p>
            <p>On executing the above command, the specified core will be deleted displaying the following message.</p>
            <div class="product-img">
              <img src="{{ site.baseurl }}/assets/images/delete.png" alt="delete" />
            </div>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <div class="subinfo-title">
        <p>You can open the web interface of Solr to verify whether the core has been deleted or not.</p>
      </div>
      <div class="subinfo-content">
        <div class="product-img">
          <img src="{{ site.baseurl }}/assets/images/deletedd.jpg" alt="deletedd" />
        </div>
      </div>
    </li>
  </ul>
</div>