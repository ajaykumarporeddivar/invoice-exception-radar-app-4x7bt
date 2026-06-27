export function cn(...classes: string[]) {
  return classes.join(' ');
}

export function formatCurrency(amount: number) {
  return `$${amount.toFixed(2)}`;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}

export function formatRelativeTime(date: string) {
  const diff = new Date().getTime() - new Date(date).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (seconds > 0) {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  } else {
    return 'just now';
  }
}

export function formatDateTime(date: string) {
  return new Date(date).toLocaleString();
}

export function truncate(text: string, length: number) {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  } else {
    return text;
  }
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export function generateId() {
  return Math.floor(Math.random() * 1000000).toString();
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function formatNumber(value: number) {
  return value.toFixed(2);
}

export function groupBy(array: any[], key: string) {
  const groups = {};
  array.forEach((item) => {
    const group = item[key];
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
  });
  return groups;
}

export function sortBy(array: any[], key: string) {
  return array.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    } else if (a[key] > b[key]) {
      return 1;
    } else {
      return 0;
    }
  });
}