Dearl Waldek,

I removed this coe from your adaptive card to work around issues w/Teams rendering the previews. Didn't want to lose your work ...

    {
      "type": "Column",
      "width": "auto",
      "items": [
        {
          "type": "Image",
          "url": "${item.resourceVisualization.previewImageUrl}",
          "horizontalAlignment": "Center",
          "width": "95px"
        }
      ]
    },
