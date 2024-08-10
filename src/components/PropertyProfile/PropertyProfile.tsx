var PropertyProfile = (function() {
    var propertyId = "";
  
    var getPropertyId = function() {
      return propertyId;    // Or pull this from cookie/localStorage
    };
  
    var setPropertyId = function(id) {
        propertyId = id;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getPropertyId: getPropertyId,
      setPropertyId: setPropertyId
    }
  
  })();
  
  export default PropertyProfile;