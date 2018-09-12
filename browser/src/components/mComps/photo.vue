<template>
  <div>
    <div id="mynetwork"></div>
    <pre id="eventSpan"></pre>
  </div>
</template>


<script>
    export default {
        name: "photo",
        methods:{
          select(){
            console.log(111);
          }
        },
      mounted(){
        // create an array with nodes
        var nodes = new vis.DataSet([
          {id: 1, label: 'Node 1',shape:'image',image:'../../../static/bch.svg',size:15,title: '1 emails per week'},
          {id: 2, label: 'Node 2',shape:'image',image:'../../../static/bch.svg',size:15,title: '2 emails per week'},
          {id: 3, label: 'Node 3',shape:'image',image:'../../../static/bch.svg',size:15,title: '3 emails per week'},
          {id: 4, label: 'Node 4',shape:'image',image:'../../../static/bch.svg',size:15,title: '4 emails per week'},
          {id: 5, label: 'Node 5',shape:'image',image:'../../../static/bch.svg',size:15,title: '5 emails per week'}
        ]);

        // create an array with edges
        var edges = new vis.DataSet([
          {from: 1, to: 3},
          {from: 1, to: 2},
          {from: 2, to: 4},
          {from: 2, to: 5}
        ]);

        // create a network
        var container = document.getElementById('mynetwork');
        var data = {
          nodes: nodes,
          edges: edges
        };
        var locales = {
          en:{
            selectNodes:function () {
              console.log(qq);
            }
          }
        }
        var options = {
          clickToUse: true,
          locale: 'en',
          locales: locales,
          edges:{
            arrows: {
              to: {enabled: true, scaleFactor: 1, type: 'arrow'},
            },
            arrowStrikethrough: false,
          },
          nodes:{
            color:{
              background:"red",
              highlight:{
                background:"yellow"
              }
            },

            size:80
          },
        };

        var network = new vis.Network(container, data, options);
        network.on('doubleClick',function (params) {
          console.log(params);
        })
        network.on('click',function (params) {
          console.log(params);
        })
      }
    }
</script>

<style scoped>
  #mynetwork {
    width: 600px;
    height: 400px;
    border: 1px solid lightgray;
  }

  p {
    max-width:600px;
  }
</style>
