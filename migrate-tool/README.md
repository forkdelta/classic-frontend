# Migration Tool
We need a way to transfer users off of the current [ED smart-contract](https://etherscan.io/address/0x8d12a197cb00d4747a1fe03395095ce2a5cc6819) (_EDSC_) to the [FD smart-contract](https://github.com/forkdelta/smart_contract) (_FDSC_) that is in development. The migration tool seeks to solve this need by forcing an overlay popup window when users first visit [ForkDelta](https://forkdelta.github.io/).

Rather than making a standalone migration utility, this utility is built on top of the [existing frontend](https://github.com/forkdelta/forkdelta.github.io). This introduces the migration to users from our trusted site and pushes them to migrate before we discontinue support of the _EDSC_ (date of or if we discontinue TBD). 

## Core Functionality
- [x] Popup overlay window.
- [x] Currently loaded user account is selected from redux store after store loads. Idea by / thanks to @activescott.
- [x] Load balances and orders from selected account that are on the _EDSC_ for [each token that FD supports](https://github.com/forkdelta/tokenbase).
- [x] Use [smart contract developed by lampshade](https://github.com/forkdelta/smart_contract/pull/1) to load balances. @lampshade9909 thank you!
- [x] Give users the option to select which (or all) balances to transfer to the _FDSC_.
![transfer_balances](https://user-images.githubusercontent.com/17055832/37544204-93ec3c32-293a-11e8-99ee-270671a5c511.png)
- [x] Allow uses add tokens not listed in our [tokenbase]
(https://github.com/forkdelta/tokenbase).
![add_token](https://user-images.githubusercontent.com/17055832/37544214-9875fdc4-293a-11e8-86a1-6774fa60650e.png)
- [x] Give users the option to select which (or all) orders on the _EDSC_ to transfer to the FDSC. (needs testing)
- [ ] Loading bar or other notification notifying user of balance and order transfer status.
- [ ] Add logic to transfer from ED smart contract to FD smart contract
## Other Functionality
- [ ] Enable some sort of cookie/session that prevents popup window from interrupting users who have seen migration utility.
- [x] Only load popup window contents when a user has a balance on the ED contract. Concept by @activescott 
- [x] Toplevel icon on navbar to open migration utility.
- [ ] Render HTML for Migration Tool through Redux (@activescott, I'd love your help with this).
- [ ] Make it look nice / user friendly (I'm not really a designer so any help here is appreciated).
- [ ] Add error handling and validation

## Development Environment 
Rather than using a standalone utility, the migration tool is built into the FD front-end. This means dealing with the gigantic main.js file ripped from the old ED site. Rather than reverse engineering the built main.js, I've compartmentalized the tool into its own directory with its own JS and Styling files. 

Since we have to use backend node packages to call the Etherium block-chain and ForkDelta's API (web3.js and socket.io.js respectively), I'm using [browserify.js](http://browserify.org/) to build a frpnt-end JS file consisting of backend node libraries. The script to quickly perform this build is found in the package.json file in the root of the migration tool directory. package.json contains the metadata of the project and should always be added to the repo.

### Front-End JS with browserify 
`npm run-script bundle-js` builds [migrate.js](./migrate.js) into [migrate_bundle.js](./migrate_bundle.js) using browserify. This allows for node modules to be processed with front-end JS. 

If the script gives you errors, try npm install browserify with the -g global flag to add browserify as a global CLI utility. 

Bundle script as found in package.json
```
browserify migrate.js -o migrate_bundle.js
```

### Dependency Management
Dependencies are found in the package.json file. If a dependency is added that is used in production, 
use the `--save` flag, otherwise use the `--save-dev` flag. 

Production 
```$xslt
npm install <package_name> --save
```

Development
```$xslt
npm install <package_name> --save-dev
```