<a href="https://badge.fury.io/js/surge-toast"><img src="https://badge.fury.io/js/surge-toast.svg" alt="npm version" height="18"></a>

# Surge Toast
A headless toast package for use in Vue-Inertia-Laravel projects. For seamless integration, use the [Surge Toast composer package]() in Laravel.

## Installation
```console
npm install surge-toast
```

If you want to use the Laravel flash message integration, you can install the Laravel package as well. For documentation, see the package [here]().
```console
composer require surge/toast
```

And then in the `app.js` or `app.ts` file of your project, use the plugin:

```javascript
import { toast } from "surge-toast"

//...

app.use(toast)
```

Within a, preferably, layout file define your Toast component and access the `useToast` hook.

```vue
<template>
    <!-- ... -->
    <Toast v-for="toast in toasts" :key="toast.id" :toast="toast" />
</template>

<script setup>
import { Toast } from '@/Components/Toast'
import { useToast } from "surge-toast"

const { toasts } = useToast()
</script>
```

## Usage
The package comes with a Laravel plugin that can be used to automatically render toast messages from the server on your frontend. This is handled automatically through intercepting the Inertia JS events, and sending via the event bus.

You can also call the toasts manually using the `useToast` hook. 

### Examples [Coming Soon]
The `examples/` directory contains three examples for using the package.
- A generic Tailwind toast component with Vue transitions
- A generic Tailwind toast component with HeadlessUI control
- `shadcn-vue` sonner component

You can copy these examples directly and modify as desired. If you are going to handle the logic yourself, ensure the `key` when performing a `v-for` loop is set to be `toast.id` or `index` to ensure smooth rendering in the VDom.

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.