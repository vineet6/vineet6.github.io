function FindProxyForURL(url, host) {
  // our local URLs from the domains below example.com don't need a proxy:
  if (shExpMatch(host, '*google.com')) {
    return 'DIRECT';
  }
  return 'PROXY 127.0.0.2:8080';
}
