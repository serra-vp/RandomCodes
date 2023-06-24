const binaryTreeSearch = (serverTree, address) => {
  
  const result = [];

  const convertIntoArray = (object_param) => {
    const { left, right, ...rest } = object_param;
    
    //push rest of the object other than left or right
    result.push({ ...rest });

    //recurse the function if left or right is still an object
    if(left) convertIntoArray(left);
    if(right) convertIntoArray(right);
  };

  //make the object into 1 dimension of array of object to be map later on
  convertIntoArray(serverTree);

  const filtered_result = result.filter( row => row.address === address );
  if(filtered_result.length === 0) return "Not found!";
  return filtered_result[0]?.hostname || '';
  
};

var example_2 = {
  "address": "xyz123",
  "hostname": "router1",
  "left": {
    "address": "abc456",
    "hostname": "switch2",
    "left": {
      "address": "192.168.0.1",
      "hostname": "router",
      "left": {
        "address": "ghi012",
        "hostname": "printer4"
      }
    }
  },
  "right": {
    "address": "jkl345",
    "hostname": "switch_right5",
    "right": {
      "address": "mno678",
      "hostname": "server_right6",
      "right": {
        "address": "pqr901",
        "hostname": "printer_right7",
        "right": {
          "address": "stu234",
          "hostname": "scanner_right8"
        }
      }
    }
  }
};

console.log(binaryTreeSearch(example_2, "192.168.0.1"));