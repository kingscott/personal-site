'use strict';

import React, { Component, useState } from 'react';
import awsApi from 'Utilities/aws';

class FolderSelector extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    let availableFolders = await awsApi.listAvailableFolders();
    this.props.setData(availableFolders);
  }

  render() {
    let { data: availableFolders, selectedFolder, setSelectedFolder } = this.props;
    return (
      <div className="flex flex-col items-end">
        {availableFolders.length > 0 && (
          availableFolders.map((f, i) => {
            let formattedName = f.split('-').join(' ');
            return (
              <a
                key={i}
                onClick={() => setSelectedFolder(f)}
                className={`block transform transition-colors duration-200 hover:text-gray-900 text-base text-right capitalize cursor-pointer my-2 ${selectedFolder === f ? 'text-gray-900' : 'text-gray-500'}`}
              >
                {formattedName}
              </a>
            );
          })
        )}
      </div>
    );
  }

};

export default FolderSelector;

        // <div className="text-base text-right underline my-2">{'Colour'}</div>
        // <div className="text-base text-right underline my-2">{'Black and white'}</div>
        // <div className="text-base text-right underline my-2">{'u00dok_1'}</div>
        // <div className="text-base text-right underline my-2">{'Painting Saskatchewan'}</div>
        // <div className="text-base text-right underline my-2">{'Big Fucking Rocks'}</div>
        // <div className="text-base text-right underline my-2">{'Waterloo Regional Space Program'}</div>
