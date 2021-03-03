function networkDown() {
  # stop delivery containers also in addition to producer and manufacturer, in case we were running sample to add delivery
  docker-compose -f $COMPOSE_FILE_BASE -f $COMPOSE_FILE_COUCH -f $COMPOSE_FILE_CA down --volumes --remove-orphans
  docker-compose -f $COMPOSE_FILE_COUCH_delivery -f $COMPOSE_FILE_delivery down --volumes --remove-orphans
  # Don't remove the generated artifacts -- note, the ledgers are always removed
  if [ "$MODE" != "restart" ]; then
    # Bring down the network, deleting the volumes
    #Cleanup the chaincode containers
    clearContainers
    #Cleanup images
    removeUnwantedImages
    # remove orderer block and other channel configuration transactions and certs
    docker run --rm -v $(pwd):/data busybox sh -c 'cd /data && rm -rf system-genesis-block/*.block organizations/peerOrganizations organizations/ordererOrganizations'
    ## remove fabric ca artifacts
    docker run --rm -v $(pwd):/data busybox sh -c 'cd /data && rm -rf organizations/fabric-ca/producer/msp organizations/fabric-ca/producer/tls-cert.pem organizations/fabric-ca/producer/ca-cert.pem organizations/fabric-ca/producer/IssuerPublicKey organizations/fabric-ca/producer/IssuerRevocationPublicKey organizations/fabric-ca/producer/fabric-ca-server.db'
    docker run --rm -v $(pwd):/data busybox sh -c 'cd /data && rm -rf organizations/fabric-ca/manufacturer/msp organizations/fabric-ca/manufacturer/tls-cert.pem organizations/fabric-ca/manufacturer/ca-cert.pem organizations/fabric-ca/manufacturer/IssuerPublicKey organizations/fabric-ca/manufacturer/IssuerRevocationPublicKey organizations/fabric-ca/manufacturer/fabric-ca-server.db'
    docker run --rm -v $(pwd):/data busybox sh -c 'cd /data && rm -rf organizations/fabric-ca/delivery/msp organizations/fabric-ca/delivery/tls-cert.pem organizations/fabric-ca/delivery/ca-cert.pem organizations/fabric-ca/delivery/IssuerPublicKey organizations/fabric-ca/delivery/IssuerRevocationPublicKey organizations/fabric-ca/delivery/fabric-ca-server.db'
    docker run --rm -v $(pwd):/data busybox sh -c 'cd /data && rm -rf organizations/fabric-ca/user/msp organizations/fabric-ca/user/tls-cert.pem organizations/fabric-ca/user/ca-cert.pem organizations/fabric-ca/user/IssuerPublicKey organizations/fabric-ca/user/IssuerRevocationPublicKey organizations/fabric-ca/user/fabric-ca-server.db'
    docker run --rm -v $(pwd):/data busybox sh -c 'cd /data && rm -rf organizations/fabric-ca/ordererOrg/msp organizations/fabric-ca/ordererOrg/tls-cert.pem organizations/fabric-ca/ordererOrg/ca-cert.pem organizations/fabric-ca/ordererOrg/IssuerPublicKey organizations/fabric-ca/ordererOrg/IssuerRevocationPublicKey organizations/fabric-ca/ordererOrg/fabric-ca-server.db'
    # remove channel and script artifacts
    docker run --rm -v $(pwd):/data busybox sh -c 'cd /data && rm -rf channel-artifacts log.txt *.tar.gz'

  fi
}