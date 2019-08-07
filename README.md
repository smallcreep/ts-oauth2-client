# ts-oauth2-client
OAuth2.0 client for browser and node.js on TypeScript

Данная библиотека реализует взе известные методы описанные в 
OAuth 2.0 Framework ([RFC 6749](https://tools.ietf.org/html/rfc6749)).
Также библиотека работает одинаково как в браузерах, так и на серверной стороне в node.js.

## Примеры использования

### Authorization Code Grant

It's implementation [section 4.1](https://tools.ietf.org/html/rfc6749#section-4.1) in RFC 6749.

генерируем урл -> отправляем пользователя на этот урл -> получаем код -> запрашиваем токен

```typescript
new AuthorizationCodeGrant(
    
)
```

### Implicit Grant

генерируем урл -> отправляем пользователя на этот урл -> получаем токен -> парсим его

### Resource Owner Password Credentials Grant

