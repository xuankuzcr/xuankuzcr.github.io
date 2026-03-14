(function () {
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

  function setBadgeValue(badge, value) {
    var valueNode = badge.querySelector(".video-stat-value");
    if (!valueNode) return;
    valueNode.textContent = value;
    badge.classList.remove("is-loading");
  }

  function hideBadge(badge) {
    badge.classList.remove("is-loading");
    badge.classList.add("is-hidden");
  }

  var badges = document.querySelectorAll(".video-stat-badge[data-stat-url]");
  if (!badges.length || typeof fetch !== "function") return;

  badges.forEach(function (badge) {
    var url = badge.getAttribute("data-stat-url");
    if (!url) {
      hideBadge(badge);
      return;
    }

    fetch(url, { credentials: "omit" })
      .then(function (response) {
        if (!response.ok) throw new Error("Failed to fetch stat");
        return response.json();
      })
      .then(function (data) {
        var rawValue = data && (data.message || data.value);
        if (!rawValue) throw new Error("Missing stat value");

        var parsed = parseCount(rawValue);
        var formatted = parsed == null ? String(rawValue) : formatWan(parsed);
        if (!formatted) throw new Error("Invalid stat value");

        setBadgeValue(badge, formatted);
      })
      .catch(function () {
        hideBadge(badge);
      });
  });
})();
