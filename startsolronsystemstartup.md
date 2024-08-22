---
layout: default
title: Start Solr on System Startup
---
<div class="backtoprevpage">
  <button id="backButton">Go Back</button>
</div>
<div class="page-title">
  <h2>Start Solr on System Startup</h2>
</div>
<div class="sub-section">
  <div class="sub-title">
    <h3>
      <span>How to start Solr on system startup?</span>
    </h3>
  </div>
  <div class="section-content">
    <ul class="info-badges">
      <li>
        <div class="subinfo-title">
          <p>Create new bat file,  write below steps in that and save file.</p>
        </div>
        <div class="subinfo-content">
          <ul class="subinfo-badges">
            <li><p>cd /</p></li>
            <li><p>cd solr-7.5.0</p></li>
            <li><p>cd bin</p></li>
            <li><p>solr start -p 8983</p></li>
          </ul>
          <p><strong>[Note:</strong> Make sure you specify correct path of your solr folder, our solr path is c:/ > Solr-7.5.0]</p>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>Search for “Task Scheduler” in the Start Menu. Select “Task Scheduler Library” on the left panel, and click on the "Create  Task" option appearing on the right panel.</p>
        </div>
        <div class="subinfo-content">
          <div class="product-img">
            <img src="{{ site.baseurl }}/assets/images/delay-windows-task-in-task-scheduler-select-c.png" alt="delay-windows-task-in-task-scheduler-select-c" />
          </div>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>In the General tab enter a proper name and description. If the task needs administrative privileges, select the check box “Run with highest privileges.”</p>
        </div>
        <div class="subinfo-content">
          <div class="product-img">
            <img src="{{ site.baseurl }}/assets/images/startup1.png" alt="startup1" />
          </div>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>We need to create a trigger. For that, go to "Triggers" tab and click "New".</p>
        </div>
        <div class="subinfo-content">
          <div class="product-img">
            <img src="{{ site.baseurl }}/assets/images/trigger1.png" alt="trigger1" />
          </div>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>Select a trigger from the drop down menu. Since I want to start a program with delayed startup, I am selecting the "At Startup" option. You can select any other trigger you want. The delay functionality is available for all triggers except the "on idle" trigger.</p>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>After selecting the event, select the check box "Delay task for," and select the number of minutes from the drop down menu. In our case I'm delaying the program launch for "15 minutes" after starting the system. Click "OK" to continue.</p>
        </div>
        <div class="subinfo-content">
          <div class="product-img">
            <img src="{{ site.baseurl }}/assets/images/123.png" alt="123" />
          </div>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>Now, go to the “Actions” tab and click 'New.'</p>
        </div>
        <div class="subinfo-content">
          <div class="product-img">
            <img src="{{ site.baseurl }}/assets/images/5678.png" alt="5678" />
          </div>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>Select an action. In my case that is “Start a Program.” Select a program by clicking on the “Browse” button. If the program needs any additional arguments, you can enter them in the “Add Arguments” field. Click “OK” to continue.</p>
        </div>
        <div class="subinfo-content">
          <div class="product-img">
            <img src="{{ site.baseurl }}/assets/images/910.png" alt="910" />
          </div>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>(Optional) If you are on a laptop, you might want to make the task start only when using AC power. If that’s the case, go to the “Conditions” tab and select the checkbox "Start the task only if the computer is on AC power."</p>
        </div>
        <div class="subinfo-content">
          <div class="product-img">
            <img src="{{ site.baseurl }}/assets/images/2222.png" alt="2222" />
          </div>
        </div>
      </li>
      <li>
        <div class="subinfo-title">
          <p>You can leave the “Settings” tab as is. Click the “OK” button to complete the task creation process.</p>
        </div>
        <div class="subinfo-content">
          <ul class="subinfo-badges">
            <li>
              <p>Finally, to verify if the task runs properly, right-click on it in the main window and select the option “Run.” If there are no errors, the task should run instantly.</p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</div>  
