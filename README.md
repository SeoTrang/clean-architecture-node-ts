# Clean Architecture - Node.js TypeScript Project

## Giới thiệu

Dự án này triển khai kiến trúc Clean Architecture cho ứng dụng Node.js sử dụng TypeScript. Kiến trúc Clean Architecture giúp tách biệt rõ ràng giữa các thành phần của ứng dụng, bao gồm Domain, Application và Infrastructure. Điều này giúp cải thiện khả năng bảo trì, mở rộng và kiểm thử.

## Cấu trúc dự án

/my-nodejs-ts-clean-architecture  
├── src  
│   ├── domain                # Các mô hình và logic nghiệp vụ  
│   │   ├── member.ts          # Domain model cho Member  
│   │   └── interfaces.ts       # Các giao diện cho Repository và Service  
│   ├── application            # Dịch vụ và logic kinh doanh  
│   │   ├── member.service.ts  # Thành phần triển khai Service  
│   │   └── interfaces.ts       # Giao diện cho MemberService  
│   ├── infrastructure         # Cơ sở dữ liệu, kết nối với Repository  
│   │   └── member.repository.ts # Thành phần triển khai Repository  
└── tsconfig.json  
└── README.md



## Cài đặt và chạy ứng dụng

1. **Cài đặt dependencies**:
   ```bash
   npm install
2. **Chạy ứng dụng:
   ```bash
   npm run dev

Kiểm thử ứng dụng
Sau khi ứng dụng chạy, bạn có thể kiểm tra API qua lệnh sau:
  ```bash
   curl http://localhost:3000/api/members
