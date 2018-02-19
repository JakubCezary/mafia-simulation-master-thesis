Both, simulation.html and description.html files must use the following script element:
<script src="../oes/loadManager.js"></script>

Note: Depending on the case, the path to the script must be adjusted. 

There must be a file named loadManagerConfig.js on the same folder as the loadManager.js for defining the loadManager.basePath:
   
   oes.loadManager.basePath = "../framework/"; // change this to the relative path of the OES distribution

