# Roadmap

## The big todos

# Stage 0 - The basics

 - [x] Fileserver
 - [x] Trackers
 - [x] Peer managment
 - [x] Peer discovery
 - [x] Basic protocol implentation
 - [x] libp2p

# Stage 1

 - [ ] Loading Zites
 - [ ] UiServer
 - [ ] Ui
 - [ ] ZeroFrame
 - [ ] Plugin API
 - [ ] Connection encryption

### Big bugs:
 - [ ] Streams are buggy

# Stage 2

 - [ ] Tor
 - [ ] Sidebar plugin
 - [ ] Torrent plugin
 - [ ] Customizable Ui

# Stage 3

 - [ ] Strict tor
 - [ ] I2P and Strict I2P
 - [ ] Plugin for IPFS integration
 - [ ] IPLD module

## Notes

It is not planned to support protocol version v1. Only v2+ will be supported.

Also for now all connections are **unencrypted**. So don't use this in production until beta or until we get tls/secio running.