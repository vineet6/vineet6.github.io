function FindProxyForURL(url, host) {
  // our local URLs from the domains below example.com don't need a proxy:
  if (shExpMatch(host, '*googleapis.com')
||shExpMatch(host, '*gstatic.com')
||shExpMatch(host, '*edubull.com')
||shExpMatch(host, 'localhost')
) {
    return 'DIRECT';
  }
  return 'PROXY 127.0.0.2:8080';
}
