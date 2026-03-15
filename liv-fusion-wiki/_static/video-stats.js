(function () {
  var statCollections = {
    "gundasmart-slam-topic": [
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1T142197ci&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV14T421X7m9&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV16E42137ru&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1Yb421i7xK&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1Jz421b7px&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1Hr2UYAESm&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1E3rQYQERf&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1j8RgYvEWJ&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1m6ZwYiEW2&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1gvLgzPEcR&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1MHERzaEM2&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV15cK6ziE6Z&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1cJ2cBpEUX&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1AiUvBxE7e&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1p4FvzQESH&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1QPfPBGEfs&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0"
    ],
    "gundasmart-fast-livo2-series": [
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1j8RgYvEWJ&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1m6ZwYiEW2&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1gvLgzPEcR&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1MHERzaEM2&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0"
    ],
    "gundasmart-liv-handheld-series": [
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1T142197ci&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV14T421X7m9&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV16E42137ru&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1Yb421i7xK&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0",
      "https://img.shields.io/badge/dynamic/json.json?url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Fweb-interface%2Fview%3Fbvid%3DBV1Jz421b7px&query=%24.data.stat.view&style=flat&label=%E6%92%AD%E6%94%BE%E9%87%8F&color=0f172a&labelColor=e2e8f0"
    ]
  };

  function formatWan(value) {
    if (!Number.isFinite(value) || value <= 0) return null;
    if (value < 10000) return value.toLocaleString("zh-CN");

    var wan = value / 10000;
    var digits = wan >= 10 ? 0 : 1;
    var text = wan.toFixed(digits).replace(/\.0$/, "");
    return text + "万";
  }

  function parseCount(raw) {
    if (raw == null) return null;
    if (typeof raw === "number") return raw;

    var normalized = String(raw).trim().toLowerCase().replace(/,/g, "");
    if (!normalized) return null;

    var match = normalized.match(/^(\d+(?:\.\d+)?)([kmb])?$/);
    if (!match) {
      var plain = Number(normalized);
      return Number.isFinite(plain) ? plain : null;
    }

    var value = Number(match[1]);
    if (!Number.isFinite(value)) return null;

    if (match[2] === "k") return value * 1000;
    if (match[2] === "m") return value * 1000000;
    if (match[2] === "b") return value * 1000000000;
    return value;
  }

  function getStatUrls(badge) {
    var collection = badge.getAttribute("data-stat-collection");
    if (collection && statCollections[collection]) {
      return statCollections[collection];
    }

    var multi = badge.getAttribute("data-stat-urls");
    if (multi) {
      return multi
        .split(",")
        .map(function (item) { return item.trim(); })
        .filter(Boolean);
    }

    var single = badge.getAttribute("data-stat-url");
    return single ? [single] : [];
  }

  function loadStatValue(url) {
    return fetch(url, { credentials: "omit" })
      .then(function (response) {
        if (!response.ok) throw new Error("Failed to fetch stat");
        return response.json();
      })
      .then(function (data) {
        var rawValue = data && (data.message || data.value);
        if (!rawValue) throw new Error("Missing stat value");

        var parsed = parseCount(rawValue);
        if (parsed == null) throw new Error("Invalid stat value");
        return parsed;
      });
  }

  function setBadgeValue(badge, value) {
    if (badge.classList.contains("video-link-views")) {
      badge.textContent = value + "播放";
      badge.classList.remove("is-loading");
      return;
    }

    var valueNode = badge.querySelector(".video-stat-value");
    if (!valueNode) return;
    valueNode.textContent = value;
    badge.classList.remove("is-loading");
  }

  function hideBadge(badge) {
    badge.classList.remove("is-loading");
    badge.classList.add("is-hidden");
  }

  function applyFallback(badge) {
    var fallback = badge.getAttribute("data-stat-fallback");
    if (!fallback) {
      hideBadge(badge);
      return;
    }

    setBadgeValue(badge, fallback);
  }

  var badges = document.querySelectorAll(
    ".video-stat-badge[data-stat-url], .video-link-views[data-stat-url], .video-link-views[data-stat-urls], .video-link-views[data-stat-collection]"
  );
  if (!badges.length || typeof fetch !== "function") return;

  badges.forEach(function (badge) {
    var urls = getStatUrls(badge);
    if (!urls.length) {
      hideBadge(badge);
      return;
    }

    Promise.allSettled(urls.map(loadStatValue))
      .then(function (results) {
        var values = results
          .filter(function (result) { return result.status === "fulfilled"; })
          .map(function (result) { return result.value; });

        if (!values.length) throw new Error("No stat values resolved");

        var total = values.reduce(function (sum, value) { return sum + value; }, 0);
        var formatted = formatWan(total);
        if (!formatted) throw new Error("Invalid stat value");

        setBadgeValue(badge, formatted);
      })
      .catch(function () {
        applyFallback(badge);
      });
  });
})();
